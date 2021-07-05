<template>
<div >

  <div>
    <h2 class="mt-12 text-yellow-500 font-semibold text-2xl mb-10 text-center">
      Reservas a la fecha
    </h2>
  </div>

  <ul>
  <li class="text-black font-bold w-10/12 bg-gray-200 hover:bg-purple-300" >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
    <h3>Fecha: 5 de Julio 2021 </h3>
    <p>Pelicula: El Joker </p>
    <p>Entradas: 2 </p>
    <p>Sala: 3 | Sillas: 12, 13 </p>
  </li>
  </ul>

  <ul>
    <li class="text-black font-bold w-10/12 bg-gray-200 hover:bg-purple-300" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
      <h3>Fecha: 7 de Julio 2021 </h3>
      <p>Pelicula: F9 </p>
      <p>Entrada: 1 </p>
      <p>Sala: 1 | Silla: 24 </p>
    </li>
  </ul>

  <ul>
    <li class="text-black font-bold w-10/12 bg-gray-200 hover:bg-purple-300" >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
      <h3>Fecha: 15 de Julio 2021 </h3>
      <p>Pelicula: Luca </p>
      <p>Entradas: 3 </p>
      <p>Sala: 5 | Sillas: 5, 6, 7 </p>
    </li>
  </ul>

  <ul>
    <li class="text-black font-bold w-10/12 bg-gray-900 " >
      <Chart class="items-center flex-col"></Chart>
    </li>
  </ul>

</div>
</template>Direccion IP: 2

<script>

import Chart from "./Chart";


export default {
  name: "MyProfile",
  components:{Chart, }
}
</script>

<style scoped>
p,
h3,
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
li.fav {
  background: #fba7a7;
  color: white;
}
img {
  width: 12%;
}
</style>