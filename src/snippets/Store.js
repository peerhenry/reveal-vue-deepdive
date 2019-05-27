import Vuex from 'vuex'

new Vuex.Store({
  state: {
    price: 22.99,
    amount: 3,
  },
  getters: {
    totalPrice: state => state.price * state.amount,
  },
  mutations: {
    SET_AMOUNT: (state, amount) => (state.amount = amount),
  },
})
