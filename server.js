const express = require('express')
const next = require('next')
console.log(process.env.NODE_ENV !== 'production')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const PORT = 4000

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/user/:userId', (req, res) => {
      return app.render(req, res, '/index', { userId: req.params.userId })
    })

    server.get('*', handle)

    server.listen(PORT, '0.0.0.0', err => {
      if (err) throw err
      console.log(`> Ready on http://0.0.0.0:${PORT}`)
    })
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
