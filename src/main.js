import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
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

const store = createStore({
  modules: {
    counter: counterModule
  },
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
});

const app = createApp(App);
app.use(store);

app.mount('#app');
