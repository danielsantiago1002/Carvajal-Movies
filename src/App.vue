<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500 bg-gray-900">
      <Navbar></Navbar>
      <SearchBar class="sticky"></SearchBar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


import Navbar from "./components/header/Navbar";
import SearchBar from "./components/header/SearchBar";

export default {
  name: 'App',
  components: {Navbar, SearchBar,}
}
</script>

<style>

</style>
