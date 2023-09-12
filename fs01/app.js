const fs = require('fs')


fs.readFile('./data.txt', 'utf8', (err, data) => {
    console.log('async read')
    console.log(data)
})

let data = fs.readFileSync('./data.txt', 'utf8')
console.log(data)
