// if bill => 0 - 5000 rs {0% discount}
// if bill => 5001 - 7000 rs {5% discount}
// if bill => 7001 - 9000 rs {10% discount}
// if bill => >9001 rs {20% discount}

let bill = Number(prompt("Enter the bill amount"))

let discount = 0

if(isNaN(bill)){
  console.log("Invalid input")
}

else if(bill>=0 && bill<=5000){
  console.log("0% discount")
}
else if(bill>=5001 && bill<=7000){
  console.log("5% discount")
  discount = 5
}

else if(bill>=7001 && bill<=9000){
  console.log("10% discount")
  discount = 10
}

else if (bill>9000){
  console.log("20% discount")
  discount = 20
}
else{
  console.log("Invalid input")
}

let payable_amount = (bill - (discount/100)*bill)

if(payable_amount>0){
  console.log(payable_amount + " rs")
}