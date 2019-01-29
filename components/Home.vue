<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sketch from '@/js/backgroundHome'

export default {
  name: 'Home',
  computed: mapGetters({
    'title': 'getTitle'
  }),
  mounted () {
    const backgroundHome = sketch()
    const P5 = require('p5')
    new P5(backgroundHome, 'p5Canvas')
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 40px;
  white-space: nowrap;
}

#p5Canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 100;
  pointer-events: none;
}
</style>
