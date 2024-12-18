const http = require('http')

const app = http.createServer((req, res)=> {
          res.statusCode=200
          res.setHeader('Content-Type', 'text/plain')
          res.end('Hello Alx School!')
})

app.listen(1245)

module.exports = app
