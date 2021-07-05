<template>
  <div class="container mx-auto mt-5">
        <AvailableMovies></AvailableMovies>
  </div>
</template>

<script>
import AvailableMovies from "./movies/AvailableMovies";


export default {
  name: "Home",
  components: {AvailableMovies,}
}
</script>

<style scoped>

</style>