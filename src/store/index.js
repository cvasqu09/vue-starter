import counterModule from './counter';
import authModule from '@/store/auth';

const mainStore = {
  modules: {
    auth: authModule,
    counter: counterModule
  },
};

export default mainStore;
