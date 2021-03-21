var helpers = {}


helpers.encPass = function (password) {
    if (password) {
        var enpasscompleted = 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' + password + 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa'
        return enpasscompleted
    }
}

helpers.IsAuthenticated = function (req, res, next){
    if (req.isAuthenticated()) {
        req.session.isAuthenticated = true;
        res.locals.isAuthenticated = true;
        res.locals.user = req.user;
        return next(); //If you are authenticated, run the next
    } else {
        return res.redirect("/login");
    }
}


module.exports = helpers;