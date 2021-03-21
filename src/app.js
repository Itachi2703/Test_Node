const express = require("express")
const app = express()
const morgan = require("morgan")
const path = require("path")
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const cookiesession = require("cookie-session")
const bodyParser = require("body-parser")

// Middlewares


app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views") )
app.use(morgan("dev"))
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())


// 


app.use(cookieParser("my app"))
app.use(session({
    secret: "My_app",
    resave: true,
    saveUninitialized: true

}))
// 
app.use(passport.initialize())
app.use(passport.session())


// Sets 
app.set("Port", 4000)

// Routers
app.use(require("./routers/router"))

// Listening


mongoose.connect("mongodb://localhost:27017/aute", {useNewUrlParser: true}, (err) => {

    console.log("Conectedd")
})

app.listen(app.get("Port"), ()=>{
    console.log(app.get("Port") + "Runing")
})


