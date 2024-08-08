const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const router = require('./routes/web')
const webRouter = router
require('dotenv').config()
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const app = express();


configViewEngine(app)

app.use('/', webRouter)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})