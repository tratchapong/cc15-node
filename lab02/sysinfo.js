const os = require('os')

let sysInfo = {
    cpu : os.cpus()[0],
    ram : os.totalmem(),
    ver : os.version()
}

console.log(sysInfo)