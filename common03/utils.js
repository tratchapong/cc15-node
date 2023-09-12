const os = require('os')

module.exports.random = () => Math.random()

exports.sysInfo = () => ({
    cpu : os.cpus()[0],
    ram : os.totalmem()
})

module.exports.cc = 15