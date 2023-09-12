const fs = require('fs/promises')

const msg = "Codecamp15 narak"

fs.writeFile('./test.txt', msg).then( ()=> {
    console.log('write test.txt OK')
})



