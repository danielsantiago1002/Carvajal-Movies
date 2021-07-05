import VueRouter from "vue-router";
import Home from "./components/Home";
import Movie from "./components/movies/Movie";
import LoginModal from "./components/movies/login/LoginModal";
import RegisterModal from "./components/movies/login/RegisterModal";
import MyProfile from "./components/profile/MyProfile";
import firebase from 'firebase';

require('firebase/auth');

let router = new VueRouter({
        mode: "history",
        routes: [
            {
                path: "/login",
                name: "login",
                component: LoginModal,
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: "/registro",
                name: "registro",
                component: RegisterModal,
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: "/mi-perfil",
                name: "mi-perfil",
                component: MyProfile,
                meta: {
                    requiresAuth: true
                }
            },

            {
                path: "/pelicula/:id",
                name: "movie",
                component: Movie,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/",
                name: "home",
                component: Home,
                meta: {
                    requiresAuth: true
                }
            },
        ]
    }
)

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some (record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated){
        next("/login");
    } else {
       next();
    }
})

export default router;