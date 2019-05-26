<template lang="pug">
  #app
    .reveal
      .slides
        section
          h1 Vue deepdive
          img(src="@pics/logo.png" height="300")
          img(src="@pics/inficon.png" height="300")
          p Peer Fisser @ Inficon 2019
          aside.notes Oh these are som enotes
        
        History

        section
          h2 Why vue is awesome?
          .row
            .col-50
              ul
                li.fragment Virtual Dom
                li.fragment Great CLI/UI
                li.fragment User-backed
                li.fragment PWA / SSR
                li.fragment Easy code-splitting
            .col-50
              ul
                li.fragment Avoiding bias
                li.fragment 
                  a(href="https://stefankrause.net/js-frameworks-benchmark8/table.html") Exceptionally fast
                li.fragment Modular libs
                li.fragment Great ecosystem
                li.fragment Reactive

        section
          h2 What is reactivity?
          p.fragment(data-fragment-index="1") When I update state...
          p.fragment(data-fragment-index="2") ...anything depending on that state should update as well
          h2.fragment(data-fragment-index="3") Updating stuff updates other stuff


        section
          h2 Reactivity demo
          aside.notes
            ul
              li make a render function
              li getter/setter
              li target/subscribers
        
        section
          h2 All the reactive things
          .col-50
            ul
              li.fragment 👍 get / set
              .fragment
                li 👍 push()
                li 👍 pop()
                li 👍 splice()
                li 👍 shift()
                li 👍 sort()
                li 👍 reverse()
          .col-50
            img(src="@pics/all_the_things.jpg" height="300")
        
        section
          h2 All the non-reactive things
          ul
            li.fragment Setting array value by index
            li.fragment Dynamically adding properties
          p.fragment(style="font-size: 92px") {{ '=> Use Vue.set()' }}

        section
          p Proxies: only Evergreen browsers/no polyfills

        section
          h2 unit test demo
        
        section
          h2 Thank you!
          p 
            a(href="https://github.com/peerhenry/reveal-vue-deepdive") https://github.com/peerhenry/reveal-vue-deepdive
</template>

<script>
// import Reveal from 'reveal'
import Reveal from 'reveal'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data() {
    return { mounted: false }
  },
  mounted() {
    if (!this.mounted)
      Reveal.initialize({
        width: '100%',
        height: '100%',
        dependencies: [
          { src: 'plugin/markdown/marked.js' },
          { src: 'plugin/markdown/markdown.js' },
          { src: 'plugin/notes/notes.js', async: true },
          { src: 'plugin/highlight/highlight.js', async: true },
        ],
      })
    this.mounted = true
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
