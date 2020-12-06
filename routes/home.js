const path = require('path')

const express = require('express')

const router = express.Router();
let user = {};
router.post('/signup',(req,res,next)=> {
    let username = req.body["username"];
    let password = req.body["pass"];
    user[username]=password;
    console.log(username,password)
    res.redirect('/')
})
router.get('/login', (req ,res, next)=>{
    res.sendFile(path.join(__dirname,'../','view','login.html'));
})
router.post('/login', (req ,res, next)=>{
    let username = req.body["username"];
    let password = req.body["pass"];
    if(user[username]!=password){
        console.log(req.headers["user-agent"] + " has logged in");
        res.redirect('/');
    }
    else
        res.sendFile(path.join(__dirname,'../','view','login.html'));

})
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','home.html'));
})

module.exports = router;