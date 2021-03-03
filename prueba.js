

var methods = {}
var pw = 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' + 'op' + 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa'
methods.suma = function (password){
	console.log(pw)
	var enc ='nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' + password + 'nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa' 
	if (enc == pw){
		console.log('Si es correcta')
		return enc
	} else {
		console.log("Error")
	}
	
}

module.exports = methods
