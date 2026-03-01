import express, { Express, Request, Response } from 'express'

// INIT
const app = express()
const port = process.env.PORT || 8080

// ROUTES
app.get('/', (req, res) => {
  console.info('GET: /')
  res.send('This is the stockfish wrapper')
})

// LISTEN ON PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port:${port}`)
})
