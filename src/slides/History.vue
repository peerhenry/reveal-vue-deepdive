<template lang="pug">
section
  h2 History
  .grid
    .left
      ul
        li.fragment(data-fragment-index="1") 2010 AngularJS
          aside.notes
            p ancient ... but it was a huge success, many devs started building large scale SPA's for the first time.
        li.fragment(data-fragment-index="2") 2013 React
          aside.notes 
            p introduced us to this new concept called the virtual DOM
            p The DOM is a data structure that you define in your HTML.
            p The DOM can be represented as a data structure in Javascript, too.
            p Why do this? Because it’s expensive to update the DOM, but not expensive to update the virtual DOM.
            p A typical page exists of thousands of DOM nodes, and having many small updates slows down the page.
            p This approach was revolutionary, and many other frameworks would later also use virtual DOM, including VueJS.
        li.fragment(data-fragment-index="3") 2014 VueJS
          aside.notes 
            p Evan You open-sourced his pet project
            p Got picked up by Laravell community
            p React's license was too strict for Apache Foundation, who took the drastic step of banning the library
            p That's when a lot of React developers noticed that Vue was a viable alternative to React.
        li.fragment(data-fragment-index="4") 2016 (sep) Angular2
          aside.notes
        li.fragment(data-fragment-index="5") 2016 (feb) Evan You goes fulltime
          aside.notes
        li.fragment(data-fragment-index="6") 2019 Inficon!
    .right(style="height: 900px;")
      img.pic.fragment.fade-in-then-out(src="@pics/angular-JS.jpg"  data-fragment-index="1")
      img.pic.fragment.fade-in-then-out(src="@pics/virtual-dom.png" data-fragment-index="2")
      .img-wrapper.fragment.fade-out(data-fragment-index="4")
        img.pic.fragment.fade-in(src="@pics/evan-you-2.jpg" data-fragment-index="3")
      img.pic.fragment.fade-in-then-out(src="@pics/angular2.png" data-fragment-index="4")
      .img-wrapper.fragment.fade-out(data-fragment-index="6")
        img.pic.fragment.fade-in(src="@pics/evan-you-2.jpg" data-fragment-index="5")
      img.pic.fragment.fade-in-then-out(src="@pics/inficon-joke-2.png" data-fragment-index="6")
      img.pic.fragment.fade-in-then-out(src="@pics/droste.png" data-fragment-index="7")
  aside.notes
    ul
      li angular ancient
      li introduced us to this new concept called the virtual DOM
      li Evan You open-sourced his pet project
      li Angular 2
      li That same year, Vue is popular enough that Evan You decides to quit his job to work fulltime on his opensource project
</template>

<script>
// import Reveal from 'reveal.js/js/reveal'

export default {
  mounted() {},
}
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.right {
  position: relative;
}

.pic {
  position: absolute;
  left: 0;
  top: 0;
  max-height: 600px;
}
</style>
