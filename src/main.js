import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueFormulate from "@braid/vue-formulate";
import VueFormWizard from "vue-form-wizard";
import Vuelidate from "vuelidate";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "./styles.css";

Vue.config.productionTip = false;
Vue.use(VueFormulate);
Vue.use(VueFormWizard);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
