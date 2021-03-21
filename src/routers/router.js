const express = require("express")
const router = express.Router()
const model = require("../model/model")
const helper = require("../configs/enc")

const passportstrategy = require("../passport/passport")
const { IsAuthenticated } = require("../configs/enc")
const { Passport } = require("passport")
// Home
router.get("/", IsAuthenticated , (req, res) => {
    console.log(req.user)
    res.render("Home")
})

// hi

router.get('/hi', IsAuthenticated,  (req, res) => {
    res.send("Hi")
    
});

// SignIn
router.get('/login', (req, res) => {
    res.render("Login")
});

router.post('/login', passportstrategy.authenticate("local", {

    successRedirect: "/hi",
    failureRedirect: "/login"


}) );


// SingUp

router.get('/signup', (req, res) => {
    res.render("SignUp")
});

router.post('/signup', async (req, res) => {
    // console.log(req.body)
    // var saveddd = async function(err, pass){
    //     if(pass){


    //     }
    //     if(err) throw err;
    // }
    const enca = helper.encPass(req.body.password)
    const saveuser = new model({
        username: req.body.username,
        password: enca,
        Name: req.body.name
    })
    const saveb = await saveuser.save( async function(err, done){
        
        if(done){
            await saveuser.save()
        }

        if(err) throw err;
    })

    res.redirect("/login")
});

module.exports = router;