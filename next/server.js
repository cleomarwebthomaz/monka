const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// Without express
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000)
})


// const express = require('express')
// const next = require('next')
    
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev: true })
// const handle = app.getRequestHandler()
    
// app.prepare()
// .then(() => {
//   const server = express()
    
//   server.get('*', (req, res) => {
//     return handle(req, res)
//   })
    
//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })