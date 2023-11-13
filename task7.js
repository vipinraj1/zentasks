// Solving problems using array functions on rest countries data.

// CREATING A XHR OBJECT
var request = new XMLHttpRequest()

//OPENING THE CONNECTION
request.open('GET', 'https://restcountries.com/v2/all', true)

//SENDING THE REQUEST
request.send()

// 4. Receiving a response via onload
// a) Get all the countries from Asia continent /region using Filter function
request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(request.responseText)
  }

  let resultData = data
    .filter((element) => {
      return element.region == 'Asia'
    })
    .map((element) => {
      return element.name
    })
  console.log(resultData)
}

//b. Get all the countries with a population of less than 2 lakhs using Filter function
request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(request.responseText)
    let resultData = data
      .filter((element) => {
        return element.population < 200000
      })
      .map((element) => {
        return element.name
      })
    console.log(resultData)
  }
}

//C. Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/all', true)
request.send()
request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(request.responseText)
    data.forEach((element) => {
      console.log(
        element.name + '; ' + element.capital + '; ' + element.flags.svg
      )
    })
  }
}

//D. Print the total population of countries using reduce function
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/all', true)
request.send()
request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(request.responseText)
    let resultData = data.reduce((acc, curr) => {
      totalPopul = 0
      if (acc.population) {
        totalPopul = acc.population
      } else {
        totalPopul = acc
      }
      return totalPopul + curr.population
    })

    console.log(resultData)
  }
}

//E. Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/all', true)
request.send()
request.onload = function () {
  if (request.status == 200) {
    var data = JSON.parse(request.responseText)
    let filterData1 = data.filter((element) => {
      return element.currencies != 'undefined'
    })

    let filterData2 = filterData1
      .filter((element) => {
        for (key in element.currencies) {
          if (element.currencies[key].code == 'USD') {
            return element
          }
        }
      })
      .map((element) => {
        return element.name
      })

    console.log(filterData2)
  }
}
