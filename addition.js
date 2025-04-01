let sum = {
  number : (num) => {
    let ans = 0
    let length = num.toString().length
    for(let i = 0; i<length; i++){
      let last_digit = num%10
      ans += last_digit
      num = Math.floor(num/10)
    }
    return ans
  },
  array : (arr) => {
    let ans = 0 
    for(let i = 0; i<arr.length; i++){
      ans += arr[i]
    }
    return ans
  },
  string : (str) => {
    str = Number(str)
    return sum.number(str)
  }
}
