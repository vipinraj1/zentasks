 1.	How to compare two JSON have the same properties without order?
//   a.	Var obj1 = {name:”Person 1”, age:5}
//   b.	Var obj2 = { age:5, name:”Person 1”}

var obj1 = { name: 'Person', age: 5 }
var obj2 = { age: 10, name: 'Jacob' }

obj1_keys = Object.keys(obj1)
obj2_keys = Object.keys(obj2)

// console.log(obj1_keys.length)

flag = 'True'
if (obj1_keys.length == obj2_keys.length) {
  for (let i = 0; i < obj1_keys.length; i++) {
    if (obj1_keys[i] in obj2 === false) {
      flag = 'False'
      break
    }
  }
} else {
  flag = 'False'
}
