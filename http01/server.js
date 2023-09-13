const http = require('http')

function httpHandler(req, res) {
        console.log(req.url)
        if(req.url === '/todo') {
            // res.statusCode=200
            // res.setHeader('content-type', 'text/html')
            // res.setHeader('We-are', 'the champion')
            res.writeHead(222, {
                'Content-Type': 'text/plain',
                'X-Powered-By': 'CC15',
                'We-are': 'The world'
              });
            res.write('<h1>Hello, Codecamp15</h1>')
            res.write('<hr>')
            res.write(todoHTML)
            res.end()
        }
        else {
            res.statusCode=200
            res.setHeader('content-type', 'text/html')
            res.write('<h1>Hello, Codecamp15</h1>')
            res.write('<hr>')
            res.write('<h3>is very best</h3>')
            res.end()
        }
}

const server = http.createServer(httpHandler)

server.listen(8000)

const todo = ['Go Home', 'Go Learn', 'Go Lunch']
const todoHTML = todo.map(el => (
    `<h1>${el}</h1>`
)).join('')

// server.on('request', )