let num = Number(prompt("Enter any integer"))
let result = `${num} is a prime Number`



if(num === 1){
  console.log(`${num} is not a prime. It is a composit number`)
}



else if(num === 0){
  console.log(`${num} is not a prime. It is a special number`)
}



else{
  for(let i = 2; i<num; i++){
   if(num%i === 0){
     result = `${num} is not a prime number`
     break
   }
}
console.log(result)
}
