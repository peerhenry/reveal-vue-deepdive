let state = {
  x: 1,
}

let target = null

Object.keys(state).forEach(key => {
  let innerValue = state[key]
  let subscribers = []
  Object.defineProperty(state, key, {
    get() {
      if (target && !subscribers.includes(target)) {
        subscribers.push(target)
      }
      return innerValue
    },
    set(val) {
      innerValue = val
      for (const sub of subscribers) sub()
    },
  })
})

function observe(fn) {
  target = fn
  fn()
  target = null
}

const title = document.getElementById('title')
observe(() => (title.innerText = `Hello Inficon ${state.x}`))

state.x = 42
