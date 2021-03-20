require('dotenv').config();
const http = require('http')
const app = require('./app')

// const PORT = process.env.PORT
const PORT = process.env.DATABASE_URL
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('* * *');
  console.log('Server on', PORT);
  console.log('* * *');
})
