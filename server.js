var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require ('mongoose')

var User = require('./models/User.js')
var app = express()

var posts = [
    {message: 'Hello'},
    {message: 'Hi'}
]

app.use (cors())
app.use (bodyParser.json())

app.get('/posts', (req,res)=> {
    res.send(posts)
})

app.post('/register', (req,res)=> {
    var userData = req.body
    var user = new User(userData)

    user.save((err, result)=>{
        if (err){
            console.log('error saving user')    
        }
        res.sendStatus(200)
    })  
})

var dbRUL = 'mongodb://localhost:27017/';

mongoose.connect(dbRUL, (err) => {
    if(!err){
        console.log('connected to mongodb')
    }
})

app.listen(3000)