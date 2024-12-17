const {createServer} = require('http')

const port = 1245

const app = createServer((req, res)=> {
        res.statusCode=200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello Alx School!')
}).listen(port)

module.exports = app
