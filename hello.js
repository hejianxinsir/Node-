'use strict'

var s = 'Hello'

function greet(name){
  console.log(s + ',' + name + '!')
}

function say(something){
  console.log(`I said ${something}`)
}

// module.exports = {
//   greet: greet,
//   say: say
// }

exports.greet = greet
exports.say = say
