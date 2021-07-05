<template>
  <div class="flex mr-20 mt-10">

    <hide-at breakpoint="small">
    <div>

      <div class="relative ">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2 mr-6">

          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               viewBox="0 0 24 24" class="w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

      </span>
        <input type="text"
               class="rounded-full bg-gray-600 px-9 w-48 h-8 mr-3 focus:outline-none focus:outline-shadow focus:bg-gray-700"
               placeholder="Buscar película..."
               @input="debounceSearch"
        >
      </div>

    </div>
    </hide-at>


    <div v-if="searchResult" class="absolute mt-10 ml-2 rounded bg-gray-600 w-44" v-click-outside="onClickOutside">
      <ul class="mt-1" v-if="searchResult.length !== 0">
        <li :key="index" v-for="(movie, index) in searchResult" class="flex items-center border-b border-gray-500 p-1">

          <router-link :to="`/pelicula/` + movie.id" class="flex items-center" @click.native="searchResult = false">
          <img :src="posterPath(movie.poster_path)" alt="pelicula" class="w-10 p-1"/>
          <span class="ml-3">{{ movie.title }}</span>
          </router-link>

        </li>
      </ul>
    </div>

    <AccountDropdown></AccountDropdown>

  </div>
</template>

<script>

import {hideAt} from 'vue-breakpoints'
import AccountDropdown from "./AccountDropdown";

export default {
  name: "SearchBar",
  components: {hideAt, AccountDropdown},
  data() {
    return {
      searchResult: [],
      searchTerm: "",
    }
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        if (event.target.value.length > 2) {
          this.fetchSearch(event.target.value)
        }
      }, 600)
    },

    async fetchSearch(term) {
      try {
        const response = await this.$http.get("/search/movie?query=" + term)
        this.searchResult = response.data.results
      } catch (error) {
        console.log(error)
      }
    },
    posterPath(poster_path) {
      if (poster_path) {
        return "https://image.tmdb.org/t/p/w500" + poster_path
      }
      return "https://via.placeholder.com/50x75"
    },
    keyboardEvents() {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.searchResult = false
        }
      })
    },
    onClickOutside (e, el) {
      this.searchResult = false
      console.log('event:', e, el)
    }
  },
  mounted() {
    this.keyboardEvents()
  }
}
</script>

<style>


</style>