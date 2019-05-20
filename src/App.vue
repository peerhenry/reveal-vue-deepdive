<template lang="pug">
  #app
    .reveal
      .slides
        section
          h1 Vue deepdive
          img(src="@pics/logo.png" height="300")
          p Peer Fisser @ Inficon 2019
        
        History

        section
          h2 Why vue is awesome?
          .row
            .col-50
              ul
                li Virtual Dom
                li Great CLI/UI
                li User-backed
                li Webpack
                li Easy code-splitting
            .col-50
              ul
                li Avoiding bias
                li 
                  a(href="https://stefankrause.net/js-frameworks-benchmark8/table.html") Exceptionally fast
                li Modular libs
                li Great ecosystem
                li Reactive

        section
          h2 Vue as an awesome reactivity system...
          h2.fragment ...but not without some subtle tradeoffs
          ul.fragment
            li Why is component data a function?
            li Why and when do I need Vue.set()?

        section
          h2 Reactivity demo

        section
          h2 unit test demo

        section
          h2 Revue Vue.set
        
        section
          h2 Thank you!
          p 
            a(href="https://github.com/peerhenry/reveal-vue-deepdive") https://github.com/peerhenry/reveal-vue-deepdive
</template>

<script>
import Reveal from 'reveal.js/js/reveal'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  mounted() {
    Reveal.initialize({
      width: '100%',
      height: '100%',
    })
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
  // background-color: #222;

  &:nth-child(even) {
    // background-color: #444;
  }
}

.reveal section img {
  background-color: white;
  margin: 0;
}
</style>
