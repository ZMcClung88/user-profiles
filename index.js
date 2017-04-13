var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var cors = require('cors')

var config = require('./config')
var userCtrl = require('./controllers/userCtrl')
var profileCtrl = require('./controllers/profileCtrl')

var corsOptions = {
  origin: 'http://localhost:4000'
}

var app = express()
const port = 4000

app.use(cors())
app.use(cors(corsOptions))
app.use(express.static('./Public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: config.sessionSecret }))

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriendsProfile);



app.listen(port, () => {
  console.log('listening on port ', port)
})
