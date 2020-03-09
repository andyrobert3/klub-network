import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "./firebase/firebase";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

let app: Vue;
firebase.auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
