// 3.	Use the same rest countries and print all countries names, regions, sub-region and populations.

//XHR
//XML Hypertext Request

// 1. Creating an XHR Object
var request = new XMLHttpRequest()

// 2. Opening a Connection
request.open('GET', 'https://restcountries.com/v2/all', true)

// 3. Sending a Request
request.send()

// 4. Receiving a response via onload
request.onload = function () {
  if (request.status == 200) {
    //RESPONSE AS STRING
    var data = JSON.parse(request.responseText)
    //console.log(data)
    //PRINT NAME, Region, Sub Region and Population
    for (let i = 0; i < data.length; i++) {
      console.log(
        data[i].name +
          ';Region - ' +
          data[i].region +
          ';SubRegion - ' +
          data[i].subregion +
          ';Population - ' +
          data[i].population
      )
    }
  }
}
