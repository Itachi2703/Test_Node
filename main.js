const methods = require('./prueba')

console.log(methods)

var user = {'name': 'pepe'}


function ins(paw, err){

	if(paw){
		
		user.pasword = methods.suma('op')
		console.log(user)

	}
	if(err) throw err;

}
ins('op')
