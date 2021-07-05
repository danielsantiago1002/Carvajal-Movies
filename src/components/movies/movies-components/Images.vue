<template>
  <div class="container mx-auto">
    <div class="ml-20 mr-20">
      <h2 class="text-4xl font-semibold mt-10">
        Imagenes de la pelicula
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-20 mb-20 mt-10">
        <div   v-for="(image, index) in images" :key="index"  class="text-center">
          <img :src="movieImage(image)" alt="imagen-pelicula" />
          <div class="py-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    images: {
      required: true,
    },
  },
  methods:{
    movieImage(images){
      if (images.file_path){
        return "https://image.tmdb.org/t/p/w300" + images.file_path
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