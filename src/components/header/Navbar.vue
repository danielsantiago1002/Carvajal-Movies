<template>
  <div class="flex ml-20 mt-5 mb-5">

    <router-link to="/" class="flex">

      <img id="cavajalLogo" src="../../assets/images/carvajal.png" alt="logoCarvajal">

      <hide-at breakpoint="mediumAndBelow">
        <img class="tituloCarvajal mr-10" src="../../assets/images/titulo-carvajal.png" height="121" width="462"
             alt="tituloCarvajal"/>
      </hide-at>

    </router-link>

    <ul class="flex mt-5 font-semibold ">
      <li>
        <router-link to="/" class="ml-5 hover:text-yellow-500">
          Películas
        </router-link>
      </li>

      <li>
        <router-link to="/mi-perfil" class="ml-5 hover:text-yellow-500">
          Mi Perfil
        </router-link>
      </li>
    </ul>

  </div>

</template>

<script>

import {hideAt} from 'vue-breakpoints'


export default {
  name: "Navbar",
  components: {hideAt}
}
</script>

<style scoped>

#cavajalLogo {
  width: 60px;
  height: auto;
}

.tituloCarvajal {
  width: 210px;
  height: auto;
}

</style>