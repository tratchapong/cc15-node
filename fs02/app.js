const fs = require('fs')
const datFile = './dat01.txt'

function readFilePromise() {
    return new Promise( (resolve, reject)=>{
        fs.readFile(datFile, 'utf8', (err, data) => {
            if(err)
                return reject(err)
            console.log('file OK..')
            return resolve(data)
        })
    })
}
readFilePromise().then( (x)=>{
    console.log(x)
})

const output = new Promise( (resolve, reject)=>{
    fs.readFile(datFile, 'utf8', (err, data) => {
        if(err)
            return reject(err)
        console.log('file OK..')
        return resolve(data)
    })
})

output.then( x=> console.log(x)).catch( err => console.log(err.code))
// output.then(console.log)