<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" v-click-outside="onClickOutside">
      <img class="imagenUsuario rounded-full" src="../../assets/images/perfil-usuario.png" height="1280" width="1280"
           alt="imagen-Usuario"/>

    </button>

    <div v-if="isOpen" class="absolute bg-white rounded-lg right-4 text-black">
      <div class="flex-col">
        <a href="" class="block bg-gray-200 px-12 rounded-lg hover:bg-yellow-500 py-2 text-center">Mi_Perfil </a>
        <a @click="signOut"
           class="cursor-pointer  block bg-gray-200 px-12 rounded-lg hover:bg-yellow-500 py-2 text-center">Cerrar_sesión</a>
      </div>

    </div>

  </div>
</template>

<script>
import firebase from 'firebase'

require('firebase/auth')

export default {
  name: "AccountDropdown",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    onClickOutside(e, el) {
      this.isOpen = false
      console.log('event:', e, el)
    },
    async signOut() {
      try {
        const data = await firebase.auth().signOut()
        console.log(data)
        this.$router.replace({name:"login"})
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style>
.imagenUsuario {
  width: auto;
  height: 32px;
}
</style>