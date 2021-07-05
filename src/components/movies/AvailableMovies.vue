<template>
  <div class="mx-5 mb-20">
    <h2 class="mt-6 text-yellow-600 font-semibold text-2xl ml-1 mb-6">
      Películas destacadas

    </h2>
    <br/>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-20">
      <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres" ></MovieItem>
    </div>
  </div>
</template>

<script>

import MovieItem from "./MovieItem";

export default {
  name: "AvailableMovies",
  components: {MovieItem},

  data() {
    return {
      movies: [],
      genres: []
    }
  },

  async mounted() {
    this.fetchGenres()
    try {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results
      console.log(this.movies)
    } catch (e) {
      console.log(e)
    }
  },

  methods: {
    async fetchGenres() {
      // https:/api.themoviedb.org/r/genre/movie/list
      try {
        const response = await this.$http.get("/genre/movie/list");
        this.genres = response.data.genres
        console.log(this.genres)
      } catch (e) {
        console.log(e)
      }
    }
  }

}


</script>

<style scoped>

</style>