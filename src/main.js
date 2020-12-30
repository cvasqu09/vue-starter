import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import mainStore from '@/store';

const store = createStore(mainStore);

const app = createApp(App);
app.use(store);

app.mount('#app');
