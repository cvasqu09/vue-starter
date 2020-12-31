import productModule from './products.js';
import authModule from './auth.js';
import cartModule from './cart.js';

const mainStore = {
  modules: {
    product: productModule,
    auth: authModule,
    cart: cartModule
  }
}

export default mainStore;
