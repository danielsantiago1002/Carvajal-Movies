<template>
  <div>
    <div class="border-b border-gray-600">
      <div class="container mx-auto flex mt-20 mb-20 ">
        <img :src="posterPath" alt="Imagen-Pelicula" class="w-64 ml-20 border-4 border-gray-600 sm:h-1/3"/>
        <div class="ml-24">
          <h2 class="text-4xl font-semibold">{{ this.movie.title }}</h2>
          <div class="flex mt-4">
            <svg class="fill-current text-yellow-500 w-4" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                    d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                    data-name="star"
                />
              </g>
            </svg>
            <span class="text-gray-300 text-md ml-1">
              {{ this.movie.vote_average * 10 }} % |
              {{ this.movie.release_date }}
              <span :key="index" v-for="(item, index) in movie.genres" class="ml-1">
                {{ item.name }}
                <span v-if="movie.genres.length - 1 !== index">
                ,
              </span>
              </span>
            </span>
          </div>
          <p class="mt-5 mr-12">
            {{ this.movie.overview }}
          </p>
          <div class="mt-5">
            <span class="font-semibold">Reparto destacado</span>
            <div class="flex">

              <div :key="index" v-for="(crew, index) in movie.credits.crew">

                <div v-if="index <3" class="flex flex-col mt-5 mr-5">
                  <span>{{ crew.name }}</span>
                  <span class="text-gray-400">{{ crew.job }}</span>
                </div>

              </div>

            </div>
            <div class="mt-10">
              <a :href="youtubeVideo"
                 target="_blank"
                 class="rounded bg-yellow-600 px-3 py-3 inline-flex hover:bg-purple-800 font-semibold text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="ml-2">
              Tráiler
            </span>
              </a>
              <a href="#"
                 class="rounded bg-yellow-600 px-3 py-3 inline-flex hover:bg-purple-800 font-semibold text-gray-100 ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span class="ml-2">
              Reservar
            </span>
              </a>

              <router-link to="/" class="rounded bg-yellow-600 px-3 py-3 inline-flex hover:bg-purple-800 font-semibold text-gray-100 ml-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                <span class="ml-2">
              Volver
            </span>
              </router-link>


            </div>
          </div>
        </div>
      </div>
    </div>

    <Cast :casts="movie.credits.cast"></Cast>

    <Images :images="movieEnglish.images.backdrops"></Images>

  </div>
</template>

<script>

import Cast from "./movies-components/Cast";
import Images from "./movies-components/Images";

export default {
  name: "Movie",
  components: {Cast, Images},
  data() {
    return {
      movie: {
        credits: {
          crew: {}
        },
        videos:{
          results:{

          }
        }
      },
      movieEnglish: {
        images: {
          backdrops: {}
        }
      }
    }
  },
  mounted() {
    this.fetchMovie(this.$route.params.id)
    this.fetchMovieEnglish(this.$route.params.id)
  },
  methods: {
    async fetchMovie(movieID) {
      const response = await this.$http.get(
          "/movie/" + movieID + "?append_to_response=credits,videos,images&language=es-ES")
      this.movie = response.data
      console.log(this.movie)
    },
    async fetchMovieEnglish(movieID) {
      const response = await this.$http.get(
          "/movie/" + movieID + "?append_to_response=credits,videos,images")
      this.movieEnglish = response.data
      console.log(this.movieEnglish)
    },

  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path
    },
    youtubeVideo() {
      if (!this.movie.videos.results.length == 0) {
        return "https://www.youtube.com/embed/" + this.movie.videos.results[0].key;
      } else {
        return ""
      }
    }
  }
}
</script>

<style scoped>

</style>