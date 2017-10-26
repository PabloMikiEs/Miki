if (typeof validate !== "function") { // estamos en el servidor
	validate = require("validate.js");
}
/**
 * https://validatejs.org/
 */
const Validations= {
	valPet : function(pet) {
		return validate(pet, {
			name : {
				presence : true,
				length : {
					minimum : 4, 
					message : "debe tener entre 4 y 18 caracteres"
				}
			}
		});
	},
}

if (typeof module !== "undefined" && module.exports) { // estamos en el servidor
	module.exports = Validations;
}
