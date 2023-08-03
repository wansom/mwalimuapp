import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import {
  getAllRequests,
  updateAdvocate,
  getAllCourts,
  addCourt,
  addUser,
  updateUser,
  addLesson,
  getAllLessons,
} from "../database/firestore";
import swal from "sweetalert";
import { createUser, signIn, logout, passwordReset } from "../database/auth";
import { arrayUnion, onSnapshot, collection,query,where } from "firebase/firestore";
import { auth, firestoreDb } from "../database/index";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users:[],
    user: {},
    step: 0,
    advocates: [],
    requests: [],
    allAdvocates: [],
    request: {},
    loading: false,
    current: 1,
    lessons:[],

    
    practiseAreas: [
      "	Admiralty (Maritime) and Aviation Law",
      "Bankruptcy Law and Recovery",
      "Corporate, Commercial and Conveyancing ",
      "Alternative Dispute Resolution ",
      "Criminal Law",
      "Civil Litigation",
      "Family Law",
      "Immigration Law",
      "Intellectual Property Law",
      "Labor (Employment) Law",
      "Tax Law",
      "Technology Law ",
      "Corporate Governance Law ",
      "Government Relations Practice"
    ],
    counties: [
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
      "Nandi",
      "Elgeyo/Marakwet",
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
    filteredItems: [],
    firebaseEror: "",
    selectedTimePeriod: "thisWeek",
    subjects:['English','Swahili','French','German','Afrikaans', 'Mathematics', 'Science', 'Social Studies', 'Religious Education', 'Creative Arts', 'Physical Education',]
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setLessons(state,val){
state.lessons=val
    },
    setUsers(state,val){
state.users=val
    },
    setSelectedTimePeriod(state, val) {
      state.selectedTimePeriod = val;
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
    setFilteredItems(state, val) {
      state.filteredItems = val;
    },
    setFirebaseError(state, val) {
      state.firebaseEror = val;
    },
  },
  actions: {
    //register new user
    signUp({ commit, dispatch }, data) {
      dispatch("changeLoading", true);
      createUser({
        email: data.email,
        password: data.password,
      })
        .then((result) => {
          addUser({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            phone_number:data.phone,
            account_type:data.account_type,
            uid: result.user.uid,
            status:'incomplete',
            username: `${data.first_name}${data.last_name}`,
            _id: result.user.uid,
            notifications: arrayUnion({
              notification: `Your account was created successfully. Proceed to complete your profile`,
              date: new Date(),
            }),
          }).then(async() => {
            dispatch("changeLoading", false);
              router.push("/dashboard");
              await dispatch("sendMail", {
              name: data.first_name,
              email: data.email,
              subject: "Mwalimu App Account",
              content:
                "Your Account has been created successfully. You can now log into your account and complete your profile",
            });
         
          });
        })
        .catch((err) => { 
          swal({
            title: "`This email count is already in use by another account!",
            text: `please enter another email and try again`,
            icon: "error",
          });   
          dispatch("changeLoading", false);
        });
    },

    //login user
    login({ dispatch }, data) {
      dispatch("changeLoading", true);
      signIn(data)
        .then(() => {
          dispatch("changeLoading", false);
          dispatch("fetchUserProfile");
          router.push("/dashboard");
        })
        .catch((err) => {
          dispatch("changeLoading", false);
          swal({
            title: "Authentication Failed!",
            text: `Please check the credentials and try again`,
            icon: "error",
          });
        });
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
      logout().then(() => {
        router.push("/sign-in");
        localStorage.clear();
      });
    },

    resetPassword({ dispatch }, values) {
      dispatch("changeLoading", true);
      passwordReset(values.email)
        .then(() => {
          dispatch("changeLoading", false);
          swal({
            title: "Passowerd Reset",
            text: `We have sent a message to your email with password reset information`,
            icon: "info",
          });
        })
        .catch((err) => {
          dispatch("changeLoading", false);
          console.log(err.message)
          swal({
            title: "Passowerd Reset",
            text: `something went wrong`,
            icon: "error",
          });
        });
    },
    /*
    user registration start
    */
    updateUser({ dispatch, commit }, data) {
      dispatch("changeLoading", true);
      let user = auth.currentUser;
      updateUser(user.uid, data)
        .then(() => {
          if (data.status == "pending approval") {

            swal({
              title: "Account submitted for review!",
              text: `Your details have been submitted successfully.Your account will be reviewed within 48 hours`,
              icon: "success",
            })  
          }else{
            swal({
              title: "Progress Saved.",
              text: `Info updated Successfully. Click next to continue.`,
              icon: "success",
            });
          }
          updateAdvocate(user.uid, {
            notifications: arrayUnion({
              notification: `your details have been updated successfully`,
              date: new Date(),
            }),
          });
          if (data.status == "pending approval") {
            updateAdvocate(user.uid, {
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
          dispatch("changeLoading", false);
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        });
    },

    //users
    fetchAllUsers({commit,dispatch}){
      const LAWYERS_PATH = "mwalimuapp";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);
      const unsubscribe = onSnapshot(
        myCollection,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setUsers", data);
        },
        (error) => {
          dispatch("changeLoading", false);
          commit("setFirebaseError", error.message);
          console.log(error.message);
        }
      );

      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },

    //lessons

    addNewLesson({commit},values){
      addLesson(values).then(()=>{
        console.log('done')
      })
    },
    getMyLessons({commit}){
      getAllLessons().then(({ data }) => {
        commit("setLessons", data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    //set selected time period
    changeTimeLine({ commit }, val) {
      commit("setSelectedTimePeriod", val);
      console.log(val)
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
      ).then((res)=>{
        console.log(res)
      })
    },
    async fetchCourts({ commit }) {
      getAllCourts().then(({ data }) => {
        commit("setCourtData", data);
      });
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
    subscribeToCollection({ commit }) {
      const LAWYERS_PATH = "nigeria_lawyers";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);

      const unsubscribe = onSnapshot(myCollection, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setAdvocates", data);
      });

      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },
    async fetAllAdvocates({ dispatch, commit }) {
      const LAWYERS_PATH = "nigeria_lawyers";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);
      const unsubscribe = onSnapshot(
        myCollection,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setAllAdvocates", data);
        },
        (error) => {
          dispatch("changeLoading", false);
          commit("setFirebaseError", error.message);
          console.log(error.message);
        }
      );

      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },
    async fetchActiveAdvocates({ dispatch, commit }) {
      const LAWYERS_PATH = "nigeria_lawyers";
      const myCollection = collection(firestoreDb, LAWYERS_PATH);
    
      // Create a query against the collection
      const queryToExecute = query(myCollection, where("status", "==", "active"));
    
      const unsubscribe = onSnapshot(
        queryToExecute,
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setAdvocates", data);
        },
        (error) => {
          dispatch("changeLoading", false);
          commit("setFirebaseError", error.message);
          console.log(error.message);
        }
      );
    
      // Return a function to detach the listener when the action is no longer needed
      return unsubscribe;
    },

    changeStep({ commit }, value) {
      commit("setStep", value);
    },
    changeLoading({ commit }, data) {
      commit("setLoading", data);
    },

    async addCourt({ dispatch }, data) {
      dispatch("changeLoading", true);
      addCourt(data).then(() => {
        dispatch("changeLoading", false);
        location.reload();
      });
    },
  },
  modules: {},
});
