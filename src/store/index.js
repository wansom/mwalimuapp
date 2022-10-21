import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import * as fb from "../firebase";
import swal from "sweetalert";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:{}
  },
  getters: {},
  mutations: {
    setUserProfile(state,val){
      state.user =val
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
            })
            .then(() => {
              router.push("/sign-in");
            });
        }).catch((err)=>{
          swal({
            title: "OOPS!",
            text: `${err.message}`,
            icon: "error",
          });
        })
    },

    //login user
    login({dispatch},data){
      fb.auth.signInWithEmailAndPassword(data.email,data.password).then((result)=>{
          dispatch("fetchUserProfile",result.user)
          router.push("/dashboard")

      }).catch((err)=>{
        swal({
          title: "OOPS!",
          text: `${err.message}`,
          icon: "error",
        });
      })
    },

    fetchUserProfile({commit},data){
      fb.usersCollection.doc(data.uid).get().then((result)=>{
        commit("setUserProfile",result.data())
      })
    }

    
  },
  modules: {},
});
