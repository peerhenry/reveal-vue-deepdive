import Vue from 'vue'

new Vue({
  data: {
    price: 22.99,
    amount: 3,
  },
  computed: {
    totalPrice() {
      return this.price * this.amount
    },
  },
  render: function(h) {
    return h('p', `€ ${this.totalPrice}`)
  },
})
