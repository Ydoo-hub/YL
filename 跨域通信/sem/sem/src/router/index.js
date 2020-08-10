import Vue from "vue";
// import Home from "../views/Home.vue";
import Register from '../views/Register.vue'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.use(axios);

const routes = [
  {
    path: "/",
    name: "Register",
    component: Register
  }
];

// const router = new VueRouter({
//   mode: 'history',
//   routes
// });

// export default router;
