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
    step:0,
    advocates:[],
    requests:[],
    allAdvocates:[],
    request:{},
    loading:false,
    current:1
  },
  getters: {},
  mutations: {
    setUserProfile(state, val) {
      state.user = val;
    },
    setStep(state,val){
      state.current=val
    },
    setLoading(state,val){
      state.loading=val

    },
    setAdvocates(state,val){
      state.advocates=val
    },
    setRequests(state,val){
      state.requests=val
    },
    setAllAdvocates(state,val){
      state.allAdvocates=val
    },
    setRequest(state,val){
      state.request=val
    }

    
  },
  actions: {
    //register new user
    signUp({ commit }, data) {
      commit("setLoading",true)
      fb.auth
        .createUserWithEmailAndPassword(data.email.replace(/\s/g, ''), data.password)
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
              notifications:[]
            })
            .then(() => {
              commit("setLoading",false)
              router.push("/sign-in");
            });
        })
        .catch((err) => {
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
          commit("setLoading",false)
        });
    },

    //login user
    login({ dispatch,commit }, data) {
      commit("setLoading",true)
      fb.auth
        .signInWithEmailAndPassword(data.email.replace(/\s/g, ''), data.password)
        .then((result) => {
          commit("setLoading",false)
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
    logout({dispatch}){
      fb.auth.signOut().then(()=>{
        router.push("/sign-in")
      }
        
      )

    },
    /*
    user registration start
    */
    updateUser({ dispatch,commit }, data) {
      commit("setLoading",true)
      let user = fb.auth.currentUser;
      fb.usersCollection.doc(user.uid).update(data).then(()=>{
    

        dispatch("fetchUserProfile",user)
        swal({
          title: "Success!",
          text: `Info updated Successfully!`,
          icon: "success",
        });
        

          fb.usersCollection.doc(user.uid).update({
            notifications:fb.types.FieldValue.arrayUnion({
              notification:`your ${data.step} have been updated successfully`,
              date:new Date()
            })
          })
        if(data.status){
          fb.usersCollection.doc(user.uid).update({
            notifications:fb.types.FieldValue.arrayUnion({
              notification:`your account details have been submitted successfully for review`,
              date:new Date()
            })
          })
        }
        commit("setLoading",false);
        dispatch("changeStep",data.current)

      }).catch((err)=>{
        commit("setLoading",false)
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
        
        async fetchRequests({ commit }) {
          fb.usersCollection.where("status","==","pending approval").onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setRequests", loadedAdvocates);
          });
        },
      
        async fetAllAdvocates({ commit }) {
          fb.usersCollection.onSnapshot((snapshot) => {
            const loadedAdvocates = [];
            snapshot.forEach((doc) => {
              const loadedAdvocate = doc.data();
              (loadedAdvocate.id = doc.id), loadedAdvocates.push(loadedAdvocate);
            });
            commit("setAllAdvocates", loadedAdvocates);
          });
        },
        fetchSingleRequest({commit},uid){
          fb.usersCollection.doc(uid).get()
        },
        changeStep({commit},value){
          commit("setStep",value)
        },
        changeLoading({commit},data){
          commit("setLoading",data)

        }
  },
  modules: {},
});
