import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import {
  getAllAdvocates,
  getAllRequests,
  addLawyer,
  updateAdvocate,
  getAllCourts,
  addCourt
} from "../database/firestore";
import swal from "sweetalert";
import { createUser ,signIn,logout,passwordReset} from "../database/auth";
import { arrayUnion } from "firebase/firestore";
import {auth} from "../database/index"
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    step: 0,
    advocates: [],
    requests: [],
    allAdvocates: [],
    request: {},
    loading: false,
    current: 1,
    practiseAreas: [
      "Family",
      "Employment",
      "Criminal Defense",
      "Real Estate",
      "Business",
      "Immigration",
      "Personal Injury",
      "Wills, Trusts & Estates",
      "Bankruptcy & Finances",
      "Government",
      "Products & Services",
      "Intellectual Property",
    ],
    counties: [
      "All",
      "Nairobi",
      "Mombasa",
      "Kwale",
      "Kilifi",
      "Tana River",
      "Lamu",
      "Taita/Taveta",
      " Garissa",
      "Wajir",
      "Mandera",
      "Marsabit",
      "Isiolo",
      "Meru",
      "Tharaka-Nithi",
      "Embu",
      "Kitui",
      "Machakos",
      "Makueni",
      "Nyandarua",
      "Nyeri",
      "Kirinyaga",
      "Murang'a",
      " Kiambu",
      "Turkana",
      "West Pokot",
      "Samburu",
      "Trans Nzoia",
      "Uasin Gishu",
      "Elgeyo/Marakwet",
      "Nandi",
      " Baringo",
      "Laikipia",
      "Nakuru",
      "Narok",
      "Kajiado",
      "Kericho",
      "Bomet",
      "Kakamega",
      "Vihiga",
      "Bungoma",
      "Busia",
      "Siaya",
      "Kisumu",
      "Homa Bay",
      "Migori",
      "Kisii",
      "Nyamira",
    ],
    courts: [
      "Supreme Court",
      "Court of Appeal",
      "National Industrial Court",
      "High Court",
      "Federal Tribunals",
      "State Tribunals",
    ],
    courtData: [],
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setStep(state, val) {
      state.current = val;
    },
    setLoading(state, val) {
      state.loading = val;
    },
    setAdvocates(state, val) {
      state.advocates = val;
    },
    setRequests(state, val) {
      state.requests = val;
    },
    setAllAdvocates(state, val) {
      state.allAdvocates = val;
    },
    setRequest(state, val) {
      state.request = val;
    },
    setCourtData(state, val) {
      state.courtData = val;
    },
  },
  actions: {
    //register new user
    signUp({ commit, dispatch }, data) {
      dispatch("changeLoading", true);
      console.log(data)
      createUser({
        email:data.email,
        password:data.password
      })
        .then((result) => {
          console.log(result.user)
          addLawyer({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            uid: result.user.uid,
            status: "incomplete",
            username:`${data.first_name}${data.last_name}`,
            _id:result.user.uid,
            notifications:arrayUnion({
              notification: `Your account was created successfully. Proceed to https://advocatelisting.acelitigator.com/sign-in to complete your profile`,
              date: new Date(),
            })
          }).then(()=>{
            dispatch("sendMail", {
              name: data.first_name,
              email: data.email,
              subject: "Acelitigator Account",
              content:
                "Your Account has been created successfully. Proceed to https://advocatelisting.acelitigator.com/sign-in to complete your profile",
            });
            dispatch("changeLoading", false);
            router.push("/sign-in");
          })
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
          dispatch("changeLoading", false);
        });
    },

    //login user
    login({ dispatch, commit }, data) {
      dispatch("changeLoading", true);
      console.log(data)
      signIn(data).then(()=>{
        dispatch("changeLoading", false);
        dispatch("fetchUserProfile");
        router.push("/dashboard");
      }).catch((err)=>{
        dispatch("changeLoading", false);
        swal({
          title: "OOPS!",
          text: `${err.message}`,
          icon: "error",
        });
      })
    },

    fetchUserProfile({ commit }) {
      let currentUser = auth.currentUser;
      if (currentUser) {
        let user = this.state.allAdvocates.filter(
          (i) => i.id === currentUser.uid
        )[0];
        commit("setUserProfile", user);
      } else {
        commit("setUserProfile", {});
      }
    },


    logout({ dispatch }) {
      logout().then(()=>{
        router.push("/sign-in");
        localStorage.clear()
      })
    },

    restPassword({ commit }, values) {
      dispatch("changeLoading", true);
      passwordReset(values.email).then(()=>{
        dispatch("changeLoading", false);
      }).catch((err)=>{
        dispatch("changeLoading", false);
      })

    },
    /*
    user registration start
    */
    updateUser({ dispatch, commit }, data) {
      dispatch("changeLoading", true);
      let user = auth.currentUser;
     updateAdvocate(user.uid,data)
        .then(() => {
          swal({
            title: "Success!",
            text: `Info updated Successfully!`,
            icon: "success",
          });

          updateAdvocate(user.uid,{
            notifications: arrayUnion({
              notification: `your ${data.step} have been updated successfully`,
              date: new Date(),
            }),
          });
          if (data.status == "pending approval") {
            updateAdvocate(user.uid,{
              notifications: arrayUnion({
                notification: `your account details have been submitted successfully for review`,
                date: new Date(),
              }),
            });
          }
          dispatch("changeLoading", false);
          dispatch("changeStep", data.current);
        })
        .catch((err) => {
          console.log(err);
          dispatch("changeLoading", false)
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },
    //mpesa
    async intiatePayments({ dispatch }, values) {
      const result = await axios.get(
        `https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mpesa/pay/${values.amount}/${values.phone_number}`
      );
      return result;
    },
    async confirmPayments({ dispatch }) {
      const result = await axios.get(
        "https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mpesa/callback"
      );
      return result;
    },
    //send email
    async sendMail({ dispatch }, values) {
      await axios.post(
        "https://us-central1-scanpal-f74da.cloudfunctions.net/barizi/mail/send",
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          content: values.content,
        }
      );
    },
    async fetchCourts({ commit }) {
      getAllCourts().then(({data})=>{
        commit("setCourtData", data);
      })
    },

    async fetchRequests({ commit }) {
      getAllRequests()
        .then(({ data }) => {
          commit("setRequests", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async fetAllAdvocates({ commit }) {
      getAllAdvocates()
        .then(({ data }) => {
          commit("setAllAdvocates", data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeStep({ commit }, value) {
      commit("setStep", value);
    },
    changeLoading({ commit }, data) {
      commit("setLoading", data);
    },

    async addCourt({ dispatch }, data) {
      
      dispatch("changeLoading", true);
      addCourt(data).then(()=>{
        dispatch("changeLoading", false);
        location.reload()
      })
    },
  },
  modules: {},
});
