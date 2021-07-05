<template>
  <div class="container mx-auto">
    <div class="ml-20 mr-20">
      <h2 class="text-4xl font-semibold mt-10">
        Elenco
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-20 mt-10">
        <div class="text-center items-center"  :key="cast.id" v-for="cast in casts">
          <img :src="castProfileImage(cast)" alt="Imagen-Actor" class="border-2 border-gray-600 hover:opacity-70 transition easy-in-out"/>
          <div class="py-2">
            <span class="text-gray-300 "> {{cast.name}} / {{cast.character}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cast",
  props: {
    casts: {
      required : true
    }
  },
  methods:{
    castProfileImage(cast){
      if (cast.profile_path){
        return "https://image.tmdb.org/t/p/w300" + cast.profile_path
      }
      else {
        return "https://via.placeholder.com/300x450"
      }
    }
  }
}
</script>

<style scoped>

</style>