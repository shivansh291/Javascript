let bill = Number(prompt("Enter the bill amount"))

let discount = 0

if(isNaN(bill)){
  console.log("Invalid input")
}

else if(bill>=0 && bill<=5000){
  console.log("0% discountcount")
}
else if(bill>=5001 && bill<=7000){
  console.log("5% discountcount")
  discount = 5
}

else if(bill>=7001 && bill<=9000){
  console.log("10% discountcount")
  discount = 10
}

else if (bill>9000){
  console.log("20% discountcount")
  discount = 20
}
else{
  console.log("Invalid input")
}

let payable_amount = (bill - (discount/100)*bill)

if(payable_amount>0){
  console.log(payable_amount + " rs")
}
