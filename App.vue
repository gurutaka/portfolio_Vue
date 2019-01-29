<template>
  <div id="app">
    <HeadComp></HeadComp>
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/Brands'

import HeadComp from '@/components/modules/HeadComp'

export default {
  name: 'App',
  components: {
    HeadComp
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}


</style>
