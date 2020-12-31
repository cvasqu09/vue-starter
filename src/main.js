import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import { createStore } from 'vuex';
import mainStore from '@/store';

const app = createApp(App);
const store = createStore(mainStore);

app.use(router);
app.use(store);

app.component('base-badge', BaseBadge);

app.mount('#app');
