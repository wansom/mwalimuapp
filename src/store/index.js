import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import * as fb from "../firebase";
import swal from "sweetalert";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    general_information: {
      first_name: "",
      last_name: "",
      phone: "",
      job_title: "",
      biography: "",
      email: "",
      location: "",
      webiste: "",
      specialisation: "",
      advocates:[]
    },
    employmentInfo: {
      current_employer: "",
      current_starting: new Date(),

      prev1: "",
      prev1ending: new Date(),
      prev1starting: new Date(),
      prev2: "",
      prev2ending: new Date(),
      prev2starting: new Date(),
      prev3: "",
      prev3ending: new Date(),
      prev3starting: new Date(),
      prev4: "",
      prev4ending: new Date(),
      prev4starting: "",
    },
    step:0,
    advocates:[]
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setGeneralInformation(state, val) {
      state.general_information = val;
    },
    setStep(state,val){
      state.step=val
    },
    setAdvocates(state,val){
      state.advocates=val
    }
  },
  actions: {
    //register new user
    signUp({ commit }, data) {
      fb.auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {
          fb.usersCollection
            .doc(result.user.uid)
            .set({
              first_name: data.first_name,
              last_name: data.last_name,
              email: data.email,
              password: data.password,
              uid: result.user.uid,
              status: "incomplete",
            })
            .then(() => {
              router.push("/sign-in");
            });
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },

    //login user
    login({ dispatch }, data) {
      fb.auth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((result) => {
          dispatch("fetchUserProfile", result.user);
          router.push("/dashboard");
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },

    fetchUserProfile({ commit }, data) {
      fb.usersCollection
        .doc(data.uid)
        .get()
        .then((result) => {
          commit("setUserProfile", result.data());
        });
    },
    /*
    user registration start
    */
    updateUser({ dispatch }, data) {
      let user = fb.auth.currentUser;
      fb.usersCollection.doc(user.uid).update(data).then(()=>{
        dispatch("fetchUserProfile",user)
        swal({
          title: "Success!",
          text: `Info updated Successfully!`,
          icon: "success",
        });

      }).catch((err)=>{
        swal({
          title: "OOPS!",
          text: `${err.message}`,
          icon: "error",
        });
      })
    },
        //mpesa
        async intiatePayments({ dispatch }, values) {
          const result = await axios.get(
            `https://us-central1-scanpal-f74da.cloudfunctions.net/mpesa/payments/pay/${values.amount}/${values.phone_number}`
          );
          return result;
        },
        async confirmPayments({ dispatch }) {
          const result = await axios.get(
            "https://us-central1-scanpal-f74da.cloudfunctions.net/mpesa/payments/callback"
          );
          return result;
        },
        //send email
        async sendMail({ dispatch }, values) {
          await axios.post(
            "https://us-central1-scanpal-f74da.cloudfunctions.net/mpesa/mail/sendmail",
            {
              name: values.name,
              email: values.email,
              subject: values.subject,
            }
          );
        },
        async fetchAdvocates({ commit }) {
          fb.usersCollection.where("status","==","active").onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setAdvocates", loadedAdvocates);
          });
        },
  },
  modules: {},
});
