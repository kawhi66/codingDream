// 方法1
function bigLetter(str) {
  var newStr = str.split(' ')
  newStr = newStr.map(item => {
    return item.slice(0, 1).toUpperCase() + item.slice(1)
  })
  return newStr
}

var str = 'hello world'
var newStr = bigLetter(str)
console.log(newStr);

// 方法2
function toUp(str) {
  return str.replace(/\b\w+\b/g, function (word) {
    return word.substring(0, 1).toUpperCase() + word.slice(1)
  })
}

var str = 'aaa, bbb ,ccc'

var newStr = toUp(str)
console.log(newStr);

// 方法3
// .word {
//   text-transform: capitalize;
// }