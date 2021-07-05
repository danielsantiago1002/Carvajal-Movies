<template>
  <div class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

    <ErrorLoginModal v-if="invalidCredentials"></ErrorLoginModal>

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">


      <section>
        <h3 class="font-bold text-2xl text-gray-600">Bienvenido a Carvajal Movies</h3>
        <p class="text-gray-600 pt-2">Ingresa con tu cuenta</p>
      </section>

      <section class="mt-10">

        <form @submit.prevent="pressed" autocomplete="off" class="flex flex-col">
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Correo</label>
            <input v-model="email" type="email" required id="email"
                   class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="mb-6 pt-3 rounded bg-gray-200">
            <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Contraseña</label>
            <input v-model="password" type="password" required id="password"
                   class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3">
          </div>
          <div class="flex justify-end">
            <a @click="caritaTriste"
               class="cursor-pointer text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Olvidaste tu
              contraseña?</a>
          </div>
          <button
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit">Ingresar
          </button>
        </form>

      </section>
    </main>

    <div class="max-w-lg mx-auto text-center mb-6">
      <p class="text-white">¿No tienes una cuenta?</p>
      <router-link to="/registro">
        <a class="font-bold cursor-pointer hover:underline">Registrate</a>.
      </router-link>

    </div>

    <footer class="max-w-lg mx-auto flex justify-center text-white">
      <a href="#" class="hover:underline">Contacto</a>
      <span class="mx-3">•</span>
      <a href="#" class="hover:underline">Privacidad</a>
    </footer>


  </div>
</template>

<script>

import ErrorLoginModal from "./ErrorLoginModal";
import firebase from 'firebase'
require('firebase/auth')


export default {
  name: "LoginModal",
  components:{ErrorLoginModal},
  data() {
    return {
      email: '',
      password: '',
      invalidCredentials: false
    }
  },
  methods: {
    caritaTriste() {
      alert(":( :( :(")
    },
    async pressed() {
      try {
        const data = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(data)
        this.invalidCredentials = false
        this.$router.replace({name:"home"})
      } catch (e) {
        console.log(e)
      }
      if (!this.data){
        this.invalidCredentials = true
      }
    }
  }
}
</script>

<style scoped>
.body-bg {
  background-color: rgba(31, 41, 55, 100);
  background-image: linear-gradient(315deg, #1F2937 0%, #4A576A 74%);
}


</style>