// Lab : ต้องการ output.json แบบนี้
// {
//     "x" : 50,
//     "y" : 20,
//     "sum" : 70
// }

const fs = require('fs/promises')

// fs.readFile('./input.json','utf8').then( (rs)=>{
//     let rs_obj = JSON.parse(rs)
//     rs_obj.sum = rs_obj.x + rs_obj.y
//     // console.log(rs_obj)
//     return (rs_obj) // resolve(rs_obj)
// }).then( rs_obj => {
//     let out = JSON.stringify(rs_obj)
//     // console.log(out) 
//     return fs.writeFile('./output.json', out)
// }).then( ()=>{
//     return fs.readFile('./output.json','utf8')
// }).then(console.log).catch(err => console.log(err))

async function run() {
    try {
        let rs_obj =  JSON.parse(await fs.readFile('./input.json','utf8'))
        rs_obj.sum = rs_obj.x + rs_obj.y
        await fs.writeFile('./output.json', JSON.stringify(rs_obj))
    }catch(err) {
        console.log('HAVE ERROR.....')
        console.log(err)
    }
}

run()