<template lang="pug">
section
  h2 History
  .grid
    .left
      ul
        li.fragment(data-fragment-index="1") 2010 AngularJS
        li.fragment(data-fragment-index="2") 2013 React
        li.fragment(data-fragment-index="3") 2014 VueJS
        li.fragment(data-fragment-index="4") 2016 (sep) Angular2
        li.fragment(data-fragment-index="5") 2016 (feb) Evan You goes fulltime
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
