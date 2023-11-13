// 2.	Use the same rest countries API URL https://restcountries.com/v2/all and display all the country flags in the counsole.

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
    //PRINT NAME AND CAPITAL
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name + ' - ' + data[i].flags.png)
    }
  }
}
