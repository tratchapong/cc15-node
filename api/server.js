require('dotenv').config()
const http = require('http')
const url = require('url')
const querystring = require('querystring')

const data = [
    {id: 11, title: 'Learn HTML'},
    {id: 22, title: 'Learn CSS'},
    {id: 33, title: 'Learn Javascript'},
]

function httpHandler(req, res) {
    if(req.url === '/') {
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify({msg: 'Welcome to my first backend server'}))
        res.end();
    } 
    else if(req.url === '/todo') {
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(data))
        res.end();
    }else if(req.url.match(/\/todo\/\d+/g)) {
        console.log(req.url)
        let i = +req.url.split('/')[2]
        console.log(i)
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        if(i>data.length-1 || i < 0)
            return res.end(JSON.stringify({msg: 'have no data'}))
        res.write(JSON.stringify(data[i]))
        res.end();
    }
    else {
        res.statusCode = 404
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify({msg: 'Path not found'}))
        res.end()
    }
}

const server = http.createServer(httpHandler)

const port = process.env.PORT || 8000
server.listen(port, () => console.log('Server Ready on port : ', port))

// 
// axios.get('http://localhost:8080')