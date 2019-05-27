<template lang="pug">
  #app
    .reveal
      .slides
        section(style="background: black;")
          .wrap(style="position: relative")
            .thing(style="position: absolute; background: transparent; width: 532px; height: 270px; left: 500px; top: 87px;")
              img(src="@pics/logo.png" height="300")
              img(src="@pics/inficon.png" height="300")
            video(loop autoplay)
              source(src="@assets/smb.mp4" type="video/mp4")
              | Your browser does not support the video tag.
          aside.notes Howmany of you have worked with Vue?

        section(style="width: 100%; height: 100%")
          video(loop autoplay style="width: 100%; height: 100%")
            source(src="@assets/andromeda.mp4" type="video/mp4")
          div.fragment(data-fragment-index="1" style="position: absolute; width: 100vw; height: 100vh; top: 0; left: 0; background: black; opacity: 0.5;")
          div(style="position: absolute; width: 100vw; height: 100vh; top: 0; left: 0")
            ul.fragment.fade-out(data-fragment-index="4" style="position: absolute; top: 45%; left: 45%; text-shadow: 0 0 2px black;")
              li.fragment(data-fragment-index="1") Physics
              li.fragment(data-fragment-index="2") Web development
              li.fragment(data-fragment-index="3") Games
            .fragment(data-fragment-index="4" style="position: absolute; top: 10%; left: 10%; text-shadow: 0 0 2px black;")
              h2 Contents
              ul
                li History
                li Virtual DOM
                li Overview Vue featues
                li Reactivity with Object.defineProperty()
                li Reactivity with Proxy
                li Events
                li Vuex
              aside.notes
                p ...
                p Obviously we don't have time to go into all of the wonderful tools and features that vue has to offer
                p So I am going to focus on the reactivity system, and explain how that boosts your productivity in frontend development.
        
        History

        section
          h2 Why vue is awesome?
          .row
            .col-50
              ul
                li.fragment(data-fragment-index="1") Virtual Dom
                  aside.notes It uses virtual DOM, which we've discussed
                li.fragment(data-fragment-index="3") CLI / UI
                  aside.notes
                    p It has a powerful CLI that also comes with a web user interface, with which
                    ul
                      li You can manage multiple projects
                      li You can manage npm packages
                      li You can inspect bundle size, to see which parts of your app take up the most amount of memory
                      li plugin system, with which you can add features that may require multiple npm packages and/or configuration
                li.fragment(data-fragment-index="5") User-backed
                  aside.notes It's backed by its users, which means user feedback and concerns are top priority
                li.fragment(data-fragment-index="7") PWA support
                  aside.notes
                li.fragment(data-fragment-index="9") Easy code-splitting
                  aside.notes
            .col-50
              ul
                li.fragment(data-fragment-index="2") Avoiding bias
                  aside.notes 
                    p According to the docs, the core team tries very hard to avoid bias. And this is noticable when you see many different ways you can setup a project.
                    p You can use typescript, but it's optional. You can use single file components or class based components. You can use templates, or render functions, with or without JSX. So you can really taylor your development experience to your preference or needs.
                li.fragment(data-fragment-index="4") 
                  a(href="https://stefankrause.net/js-frameworks-benchmark8/table.html") Exceptionally fast
                  aside.notes It's fast. This is a link to benchmarks, in case youd would like to review this presentation
                li.fragment(data-fragment-index="6") Huge ecosystem
                  aside.notes It has an ever growing ecosystem. Documentation, libraries, theming and testing utilities to name but a few.
                li.fragment(data-fragment-index="8") SSR support
                  aside.notes
                li.fragment(data-fragment-index="10") Reactive
                  aside.notes

        section
          h2 What is reactivity?
          p.fragment(data-fragment-index="1") When I update state...
          p.fragment(data-fragment-index="2") ...anything depending on that state should update as well

        section
          h2 Updating stuff... 
          h2 ...updates other stuff

        section
          img(src="@pics/component.png")
          // pre(style="width: 50%;")
            code.hljs(data-trim data-noescape style="padding: 1em;")
              | new Vue({
              |   data: {
              |     price: 22.99,
              |     amount: 3
              |   },
              |   computed: {
              |     totalPrice() {
              |       return this.price*this.amount
              |     }
              |   },
              |   render: function(h) { 
              |     return h('p', `€ ${this.totalPrice}`)
              |   },
              | })
          aside.notes
            ul
              li From the looks of it, this is some kind of shopping basket item.
              li We are using the render function, but we could have jut as easily used a template.
              li How do achieve reactivity? In other words...
              li No need to query and update the DOM.
              li No need to call a setData function.
              li No need to use RXJS with observables and subscriptions
              li Just assign a new value to price, and anything depending on price, either directly or indirectly will update.
              li So this reactivity model relieves us from a great deal of cognitive overhead, and that's one of the reasons why it gices us such a great productivity boost.

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
                aside.notes Vue conveniently provides wrappers for all of these, so that they will notify the subscribers of that array.
          .col-50
            img(src="@pics/all_the_things.jpg" height="300")
        
        section
          h2 All the non-reactive things
          ul
            li.fragment Setting array value by index
            li.fragment Dynamically adding properties
          p.fragment(style="font-size: 92px") {{ '=> Use Vue.set()' }}
          aside.notes Sadly there are some things that we cannot intercept with the Object API

        section(style="content-align: center;")
          h2 Use Vue.set()
          div(style="width: 80%; margin: auto; font-size: 64px;")
            .col-50(style="padding-left: 0.1em; padding-right: 0.1em")
              .fragment(data-fragment-index="1")
                pre(style="padding: 0.2em; width: 100%; margin: 0; margin-bottom: 1em")
                  code.hljs(data-trim data-noescape) myArray[8] = 'hi'
              .fragment(data-fragment-index="3")
                pre(style="padding: 0.2em; width: 100%; margin: 0;")
                  code.hljs(data-trim data-noescape) myObject.newProp = 'hi'
            .col-50(style="padding-left: 0.1em; padding-right: 0.1em;")
              .fragment(data-fragment-index="2") 
                pre(style="padding: 0.2em; width: 100%; margin: 0; margin-bottom: 1em")
                  code.hljs(data-trim data-noescape) Vue.set(myArray, 8, 'hi')
              .fragment(data-fragment-index="4")
                pre(style="padding: 0.2em; width: 100%; margin: 0;")
                  code.hljs(data-trim data-noescape) Vue.set(myObject, 'newProp', 'hi')
                aside.notes While the Object API cannot intercept these assigments, there is a different API for ES5 that can

        section
          h2 Proxies
          .col-50
            pre.fragment
              code.hljs(data-trim data-noescape) new Proxy(target, handler)
            pre.fragment
              code.hljs(data-trim data-noescape)
                | function observe(data) {
                |   const observedData = new Proxy(data, {
                |     get() {
                |       // subscribe target
                |     },
                |     set() {
                |       // trigger subscribers
                |     },
                |     deleteProperty() {
                |
                |     },
                |   })
                | }
          .col-50
            img(src="@pics/proxy.png" height="400")
          aside.notes 
            p This is the syntax for the Proxy API. The target is the original thing you need to access, the handler contains the interceptors for whatever you need, such as get or set.
            p ... don't need Vue.set ...So why don't we use proxies.
        
        section
          h2 Proxies
          p Only supported in Evergreen browsers
          p.fragment Use <span style="color: orange">2.x-next</span> if you don't need to support <span style="color: cornflowerblue">IE11</span>
          p.fragment Use <span style="color: orange">2.x</span> if you do 
            span.fragment (don't fortget <span style="color: lime">Vue.set()</span>)
          aside.notes Unshimmable. No polyfill and no way to fake them in older browsers.
        
        section
          h2 events
          p Child component
          pre(style="width: 50%;")
            code.hljs(data-trim data-noescape) this.$emit('updateAmount', amount)
          .fragment
            p Parent component
            pre(style="width: 60%;")
              code.hljs(data-trim data-noescape) &lt;MyComponent @updateAmount="amount =&gt; $emit('updateAmount', amount)"/&gt;
          aside.notes
            p ... supereasy ... anywhere in your component ...
            p ...This only emits to the parent, if you want to emit to the grandparent...
            p Sometimes you have big form...
        
        section
          h2 Communicate events using Vuex

        section
          div(style="width: 80%; margin: auto")
            .col-50
              h2 Vue component
              ul
                li data
                li computed
                li methods
            .col-50
              h2 Vuex store
              ul
                li state
                li getters
                li actions & mutations
        
        section
          img(src="@pics/vuex.png")
          // pre(style="width: 50%;")
            code.hljs(data-trim data-noescape style="padding: 1em;")
              | new Vuex.Store({
              |   state: {
              |     price: 22.99,
              |     amount: 3
              |   },
              |   getters: {
              |     totalPrice: (state) =&gt; state.price*state.amount
              |   },
              | })
        
        section
          p(style="font-weight: bold; font-size: 120%;") The store is reactive
          p Component A
          pre.fragment(style="width: 50%;" data-fragment-index="2")
            code.hljs(data-trim data-noescape) this.$store.commit('SET_AMOUNT', 5)
          div
            p Store
            pre.fragment(style="width: 50%;" data-fragment-index="1")
              code.hljs(data-trim data-noescape) SET_AMOUNT: (state, payload) =&gt; state.amount = payload
          div
            p Component B
            pre.fragment(style="width: 50%;" data-fragment-index="3")
              code.hljs(data-trim data-noescape) this.$store.getters.totalPrice
        
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
@import '~reveal.js/lib/css/monokai.css';

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
