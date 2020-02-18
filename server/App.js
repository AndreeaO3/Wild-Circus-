const express = require('express')
const models = require("./models")
const sendNodeMailer = require('./routes/nodemailer')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.get('/', (req, res) => res.send('Hello World!'));


app.post('/bookTicket', (req, res) => {
console.log(req.body);
 models
   .Tickets
   .create({ name: req.body.name, email: req.body.email, performance: req.body.performance, age: req.body.age, quantity: req.body.quantity})
   .then(ticket => res.json(ticket))
})
;


app.post('/sendMail', (req, res) => {
  console.log(req.body)
  sendNodeMailer('oanandreeadin@gmail.com', req.body)
      .then(rez => {
          res.status(200).json("Congrats! We have sent you an email with your booking information!")
      })
      .catch(err => {
          console.log(err)
          res.status(400).json("Oops, something went wrong!")
      })
})

models
 .sequelize
 .sync()
 .then(() => app.listen(5000, () => console.log(`App listening on port 5000!`)));

