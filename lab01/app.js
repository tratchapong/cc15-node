const os = require('os')

// console.log(os.cpus())
// console.log(os.cpus().length)

let fake_speed = os.cpus().map( el => el.speed * 2)
console.log(fake_speed)