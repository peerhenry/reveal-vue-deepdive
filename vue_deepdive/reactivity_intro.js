var data = (()=> {
  var data = {
    value: 5
  }
  var intenralVal = data.value
  var target = null
  var dependencies = []
  Object.defineProperty(data, "value", {
    get(){
      if(target) dependencies.push(target)
      return intenralVal
    },
    set(newVal){
      intenralVal = newVal
      dependencies.forEach(d => d())
    }
  })

  function watch(method) {
    target = method
    method()
    target = null
  }

  watch(() => console.log("Pietje", data.value))

  data.value = 20
  return data
})()