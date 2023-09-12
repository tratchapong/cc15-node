const fs = require('fs')
const fsa = require('fs/promises')

// ReadFileSync
// console.time('readFileSync')
// let data1 = fs.readFileSync('./resource/dat01.txt', 'utf8')
// console.log(data1)
// let data2 = fs.readFileSync('./resource/dat02.txt', 'utf8')
// console.log(data2)
// let data3 = fs.readFileSync('./resource/dat03.txt', 'utf8')
// console.log(data3)
// let data4 = fs.readFileSync('./resource/dat04.txt', 'utf8')
// console.log(data4)
// console.timeEnd('readFileSync')

// ReadFile แบบ callback asynchronous
// console.log('===========')
// console.time('readFileCB')
// fs.readFile('./resource/dat01.txt', 'utf8', (err, data) => console.log(data))
// fs.readFile('./resource/dat02.txt', 'utf8', (err, data) => console.log(data))
// fs.readFile('./resource/dat03.txt', 'utf8', (err, data) => console.log(data))
// fs.readFile('./resource/dat04.txt', 'utf8', (err, data) => console.log(data))
// console.timeEnd('readFileCB')

// ReadFile แบบ Promise asynchronous
// console.time('readFilePromise')
// let pm1 = fsa.readFile('./resource/dat01.txt', 'utf8').then(data=>console.log(data))
// let pm2 = fsa.readFile('./resource/dat02.txt', 'utf8').then(data=>console.log(data))
// let pm3 = fsa.readFile('./resource/dat03.txt', 'utf8').then(data=>console.log(data))
// let pm4 = fsa.readFile('./resource/dat04.txt', 'utf8').then(data=>console.log(data))
// console.timeEnd('readFilePromise')

let pm1 = fsa.readFile('./resource/dat01.txt', 'utf8')
let pm2 = fsa.readFile('./resource/dat02.txt', 'utf8')
let pm3 = fsa.readFile('./resource/dat0.txt', 'utf8')
let pm4 = fsa.readFile('./resource/dat04.txt', 'utf8')

Promise.all([pm1,pm2,pm3,pm4]).then( res => {
    // console.log(res[0])
    // console.log(res[1])
    // console.log(res[2])
    // console.log(res[3])
    res.forEach( x => console.log(x))   
}).catch(err=>console.log(err))
