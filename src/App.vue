<template lang="pug">
  #app
    .reveal
      .slides
        section
          h1 Vue deepdive
          .row
            img(src="./assets/logo.png" height="300")
        section
          h2 Getting started...
          p.fragment Raw JS
          p.fragment Webpack
          p.fragment Vue CLI

        section
          img(src="./assets/risingstars.png")
</template>

<script>
import Reveal from 'reveal.js/js/reveal'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  mounted() {
    Reveal.initialize()
  },
}
</script>

<style lang="scss">
@import '~reveal.js/css/reveal.css';
@import '~reveal.js/css/theme/black.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}

.row {
  display: flex;
}

.col-50 {
  width: 50%;
  display: block;
  float: left;
  padding: 1em;
  box-sizing: border-box;
  background-color: #222;

  &:nth-child(even) {
    background-color: #444;
  }
}

.reveal section img {
  background-color: white;
  margin: 0;
}
</style>
