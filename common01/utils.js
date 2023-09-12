const os = require('os')

function random() {
    return Math.floor(Math.random() * 10)
}

function sysInfo() {
    return {
        cpu : os.cpus()[0],
        mem : os.totalmem()
    }
}

module.exports = { random, info: sysInfo , cc: 15 }
// module.exports = { random: random, sysInfo:sysInfo }

