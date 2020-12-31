const authModule = {
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  }
};

export default authModule;
