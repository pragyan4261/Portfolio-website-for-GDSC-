const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/portfolioDB', {useNewUrlParser: true} );

const userSchema = new mongoose.Schema({
    message: String,
    clientName: String,
    email: String,
    subject: String

})
 const User = new mongoose.model('User', userSchema);

 app.get('/', (req,res)=>{
    res.render('landing');
 })

 
 app.post('/', (req,res)=>{
    const message = req.body.message;
    const clientName = req.body.clientName;
    const email = req.body.email;
    const subject = req.body.subject;
    // console.log(message, firstName, email, subject);

    res.redirect('/#section1');
    var new_user = new User({
        message,
        clientName,
        email,
        subject
    
    })
      
    new_user.save()
    .then((result)=>{

        // console.log(result);
    }
    )
    .catch((err)=>{
        console.log(err);
    });
})









 app.listen(8080,()=>{
    console.log("Listening on port 8080");
 })

 