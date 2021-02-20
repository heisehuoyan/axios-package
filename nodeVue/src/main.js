import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");