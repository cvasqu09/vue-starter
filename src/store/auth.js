const authModule = {
  state() {
    return {
      auth: {
        isAuthed: false
      }
    };
  },
  mutations: {
    authenticate(state) {
      state.auth.isAuthed = true;
    },
    logout(state) {
      state.auth.isAuthed = false;
    }
  },
  getters: {
    isAuthed(state) {
      return state.auth.isAuthed;
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    },
    logout(context) {
      context.commit('logout');
    }
  }
};

export default authModule;
