const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.amount;
    }
  },
  getters: {
    count(state) {
      return state.counter
    }
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 2000);
    }
  }
};

export default counterModule;
