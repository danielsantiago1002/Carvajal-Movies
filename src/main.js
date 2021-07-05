import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
import App from './App.vue'
import "@/assets/css/styles.css"
import api from "./components/services/api.js"
import vOutsideEvents from 'vue-outside-events'
import axios from "axios";
import firebase from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApAVTx-Bekd4KJ2yUAn9HISSzkefnKRuQ",
    authDomain: "carvajal-movies.firebaseapp.com",
    projectId: "carvajal-movies",
    storageBucket: "carvajal-movies.appspot.com",
    messagingSenderId: "313022556558",
    appId: "1:313022556558:web:6b2ee7b2ffdd2a596e5cdf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.prototype.$axios = axios;
Vue.use(vOutsideEvents)
Vue.prototype.$http = api
Vue.config.productionTip = false
Vue.use(VueRouter)

let app;

firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    if (!app) {
        app = new Vue({
            render: h => h(App),
            router: routes,
        }).$mount('#app')
    }
})


