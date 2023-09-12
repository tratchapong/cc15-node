const path = require('path')

console.log(__dirname)
console.log(__filename)

let thePath = __dirname + '/go/to/test.txt'
console.log(thePath)
console.log(path.dirname(thePath))
console.log(path.basename(thePath))
console.log(path.extname(thePath))

let p1 = path.join(__dirname,'data','user')
let p2 = path.join(__dirname,'..')
console.log(p1)
console.log('p2',p2)
console.log(path.resolve(__dirname,'../..'))
// console.log(path.resolve('data', 'user'))

console.log(path.normalize(p2))
// console.log(path.isAbsolute('../data/user'))