 //1
// a. Print odd numbers in an array
let numbers = [1, 2, 5, 6, 3, 2]

function oddNumbers(numberList) {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 != 0) {
      console.log(numberList[i])
    }
  }
}

// oddNumbers  (numbers)

// 2
// b) Convert all the strings to title caps in a string array
let cars = ['volVo', 'BMW', 'forD', 'MaZDa']
function titleCapConversion(stringList) {
  for (let i = 0; i < stringList.length; i++) {
    cars[i] =
      stringList[i].charAt(0).toUpperCase() +
      stringList[i].toLowerCase().slice(1)
  }
}

// titleCapConversion(cars)
// console.log(cars)

// 3
// c. Sum of all numbers in an array
let numbers_1 = [1, 2, 5, 6, 3, 2]

function sumNumbers(numberList) {
  let sum = 0
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]
  }
  console.log(sum)
}

// sumNumbers(numbers_1)

//4
// d. Return all the prime numbers in an array
// A number is prime if it is divided by exactly two numbers.
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

function primeNumber(arr) {
  let sortArray = []
  arr.forEach((number) => {
    let factor = 0
    for (let i = 0; i <= number; i++) {
      if (number % i == 0) {
        factor++
      }
    }
    if (factor == 2) {
      sortArray.push(number)
    }
  })
  console.log(sortArray)
}

// primeNumber(numArray)

// 5
// e. Return all the palindromes in an array
numbers_3 = [172, 171, 717, 123, 414]

function palindromeFunc(arr) {
  let returnVal = []
  arr.forEach((number) => {
    let new_number =
      parseFloat(number.toString().split('').reverse().join('')) *
      Math.sign(number)
    if (number == new_number) {
      returnVal.push(number)
    }
  })
  console.log(returnVal)
}
palindromeFunc(numbers_3)

// g.Remove duplicates from an array
let numbers_2 = [1, 2, 5, 6, 3, 2, 2, 3, 4]

function removeDuplicates(numberList) {
  let returnVal = []
  for (let i = 0; i < numberList.length; i++) {
    if (!returnVal.includes(numberList[i])) {
      returnVal.push(numberList[i])
    }
  }
  console.log(returnVal)
}

// removeDuplicates(numbers_2)
