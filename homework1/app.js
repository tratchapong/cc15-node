const fs = require('fs/promises')
const path = require('path')

const products = path.resolve('resource', 'products.json')
const summary = path.resolve('resource', 'summary.json')

const getFile = (file) => {
    return fs.readFile(file, 'utf8')
}

getFile(products)
.then(raw => {
    let data = JSON.parse(raw)
    let output = data.reduce( (a,c) => {
        if( !a[c.category.name])
            a[c.category.name] = 0
        a[c.category.name] += 1
        a.all += 1
        return a
    },{all : 0})
    return fs.writeFile(summary, JSON.stringify(output,null,2))})
.then( ()=> getFile(summary))
.then(console.log)


// getFile(products).then(raw => {
//     let data = JSON.parse(raw)
//     let output = data.reduce( (a,c) => {
//         if( !a[c.category.name])
//             a[c.category.name] = 0
//         a[c.category.name] += 1
//         a.all += 1
//         return a
//     },{all : 0})
//     console.log(output)
//     return output
// }).then(output => {
//     fs.writeFile(summary, JSON.stringify(output))
// }).then( ()=> console.log('OK'))
