

var methods = {}
var pw = 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' + 'op' + 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa'
methods.suma = function (password){
	var enc ='nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' + password + 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' 
	if (enc == pw){
		return enc
	} else {
		console.log("Error")
	}
	
}

module.exports = methods
