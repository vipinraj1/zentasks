// 3.	Write a “person” class to hold all the details.
class person {
  constructor(firstName, lastName, age, placeBorn) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.placeBorn = placeBorn
  }
  getDetails() {
    return `The Person of Interest is ${this.firstName} ${this.lastName} and his age is ${this.age} born at ${this.placeBorn}.`
  }
}

let person1 = new person('ram', 'kumar', 29, 'Coimbatore')
let person2 = new person('mithun', 'raj', 28, 'delhi')

// console.log(person1.getDetails())
// console.log(person2.getDetails())

// 4.	write a class to calculate the uber price.
// Variables - rate, distance, waitingTime
// Functions - getRideDetails, getRidePrice [(rate*distance) + (waitingTime * 5)]
// Feature to update distance - setDistance
class Uber {
  constructor(rate, distance, waitingTime) {
    this.rate = rate
    this.distance = distance
    this.waitingTime = waitingTime
  }

  setDistance(dist) {
    this.distance = dist
  }

  getRideDetails() {
    return `The Ride Rate per Km is Rs.${this.rate} for the distance of ${this.distance} km for the waiting time ${this.waitingTime}.`
  }

  getPrice() {
    let totalPrice = this.rate * this.distance + this.waitingTime * 5
    return totalPrice
  }
}

let uberTrip1 = new Uber(40, 10, 5)
let uberTrip2 = new Uber(40, 15, 10)

// console.log(uberTrip1.getPrice())
// uberTrip1.setDistance(12)
// console.log(uberTrip1.getRideDetails())
// console.log(uberTrip1.getPrice())
// console.log(uberTrip2.getRideDetails())

// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// class Movie {
//   constructor(title, studio, rating) {
//     this.title = title
//     this.studio = studio
//     this.rating = rating
//   }
// }

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie {
  constructor(title, studio, rating = 'PG') {
    this.title = title
    this.studio = studio
    this.rating = rating
  }
  getMovieDetails() {
    return `The Title is ${this.title} from the Studio ${this.studio} with a rating of ${this.rating}.`
  }
}

let movie1 = new Movie('Bhim', 'AVM')
let movie2 = new Movie('Spyder Man', 'Marvels', 'R')

console.log(movie1.getMovieDetails())
console.log(movie2.getMovieDetails())

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
function getPG(MovieArr) {
  let returnVal = []
  for (let i = 0; i < MovieArr.length; i++) {
    if (MovieArr[i].rating == 'PG') {
      returnVal.push(MovieArr[i])
    }
  }
  return returnVal
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let movie3 = new Movie('Casino Royale', 'Eon Productions', 'PG­13')

// Circle - Class
// Convert the UML diagram to Typescript class. - use number for double
//Properties radius(default 1.0), colorData (default 'red')

class Circle {
  constructor(radius = 1.0, color = 'red') {
    this.radius = radius
    this.color = color
  }

  getRadius() {
    return this.radius
  }

  setRadius(radius) {
    this.radius = radius
  }

  getColor() {
    return this.color
  }

  setColor(color) {
    this.color = color
  }

  toString() {
    return `Radius= ${this.radius}, Color= ${this.color}`
  }

  getArea() {
    let area = Math.PI * this.radius * this.radius
    return parseInt(area)
  }

  getCircumference() {
    let circumference = 2 * Math.PI * this.radius
    return parseInt(circumference)
  }
}
