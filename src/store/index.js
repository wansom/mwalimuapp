import { createUser, signIn, logout, passwordReset } from '@/services/auth';

const state = {
  user: null,
  auth: null,
  isLoggedIn: false
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
  clearUser(state) {
    state.user = null;
    state.isLoggedIn = false;
  }
};

const actions = {
  async register({ commit }, payload) {
    try {
      const userCredential = await createUser(payload);
      commit('setUser', userCredential.user);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async login({ commit }, payload) {
    try {
      const userCredential = await signIn(payload);
      commit('setUser', userCredential.user);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async signout({ commit }) {
    try {
      await logout();
      commit('clearUser');
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async resetPassword(_, email) {
    try {
      await passwordReset(email);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

const getters = {
  user: state => state.user,
  isAuthenticated: state => state.isLoggedIn
};

export default {
  state,
  actions,
  mutations,
  getters,
};
