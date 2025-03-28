let array = ["Shivansh", "Saksham", "Yuvraj"]
let output = array.filter(function(value){
  return value.startsWith("S")
})
console.log(output)

// This method (filter) select elemnts form the "array" (when return is true) and put it in "output"