let state = {
  x: 1,
  foo: ['foo', 'bar'],
}

let target = null
let subscribers = []

for (const key in state) {
  let innerValue = state[key]
  Object.defineProperty(state, key, {
    get() {
      if (target && !subscribers.includes(target)) {
        subscribers.push(target)
      }
      return innerValue
    },
    set(value) {
      innerValue = value
      for (const sub of subscribers) sub()
    },
  })
}

const title = document.getElementById('title')

function watch(fn) {
  target = fn
  fn()
  target = null
}

watch(() => (title.innerText = `Hello inficon ${state.x}`))
watch(
  () => (document.getElementById('double').innerText = `foo is [${state.foo}]`)
)

state.x = 42
state.foo.push('foobar')
