const {createServer} = require('http')
const countStudents = require('./3-read_file_async')

const port = 1245

const app = createServer(async (req, res)=> {
        if (req.url ==='/') {
                  res.writeHead(200, {'Content-Type': 'text/plain'})
                  res.write('Hello Holberton School!')
                  res.end()
        } else if (req.url ==='/students') {
                try {
                       if (process.argv[2]) {
                                  const result=await countStudents(process.argv[2])
                                  res.statusCode=200
                                  res.write(`This is the list of our students\n${result}`
                                         res.end()
                                         }else throw new Error('Cannot load database')
                                  } catch(error) {
                          res.statusCode=500
                          res.end(
                                  'This is the list of our students\n'
                                  + `${error.message}`,
                          )
                          }
                }
        })

        app.listen(port)
        module.exports=app
