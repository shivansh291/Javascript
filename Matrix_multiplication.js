let array1 = [2,3,4]
let array2 = [10,100,1000]
let output = []

for(let i = 0; i<array1.length; i++){
  output.push(array1[i]*array2[i])
}

console.log(output)
