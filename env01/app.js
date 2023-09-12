require('dotenv').config() 

console.log('APIKey =', process.env.APIKEY)
console.log('TITLE =', process.env.TITLE)

let apikey = process.env.APIKEY
console.log(apikey)

console.log(+process.env.LUCKY_NUM + 1)
console.log(process.env.ADMIN)
console.log(typeof process.env.ADMIN)

let admin_obj = JSON.parse(process.env.ADMIN)
console.log(admin_obj)
console.log(admin_obj.name)