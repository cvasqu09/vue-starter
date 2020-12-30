import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
     counter: 0
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter = state.counter + payload.amount;
    }
  }
})

const app = createApp(App);
app.use(store);

app.mount('#app');
