const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const User = require("../model/model")
const encPass = require("../configs/enc")
const path = require("path")

passport.use(new LocalStrategy({
    usernameField: "username"
},async function (username, password, done){
    if(!username){
        return done(null, false)
    }else{
        const user = await User.findOne({username: username})
        if(user){
            return done(null, user)
        }else{
            return done(null, false)
        }
    }
    if(!password){
        return done(null, false)
    }else{
        const new_encPass = encPass.encPass(password)
        console.log(new_encPass)
        const user = await User.findOne({password: new_encPass})
        if(!user){
            return done(null, false)
        }else{
            return done(null, user)
        }
    }
    
}))
passport.serializeUser(function (User, done){
    done(null, User.id)
})

passport.deserializeUser(async function(id, done){
    await User.findById(id, function(err, User){
        done(err, User)
    })
})

module.exports = passport