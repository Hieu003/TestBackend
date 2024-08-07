const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT
const hostname = process.env.HOST_NAME
const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Hello World! with nodemon')
})

app.get('/EJS', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})