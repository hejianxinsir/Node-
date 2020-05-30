
let {greet, say} = require('./hello')

var s = 'Janson'

say(s)
greet(s)

// 异步读文件
var fs = require('fs')

fs.readFile('sample.txt', 'utf-8', function(err, data){
  if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})

// 同步读文件

var data = fs.readFileSync('sample.txt', 'utf-8')
console.log(data)

// try{}catch{} 捕获错误

try{
  var data = fs.readFileSync('sample.txt', 'utf-8')
}catch(err){
  console.log(err)
}
