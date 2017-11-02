if (typeof validate !== "function") {  
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
			},
			specie : {
				presence : true,
				length : {
					minimum : 4,
					maximum: 15,
					message : "debe tener entre 4 y 15 caracteres"
				}
			},	
			race : {
				presence : true,
				length : {
					minimum : 4,
					maximum: 15,
					message : "debe tener entre 4 y 15 caracteres"
				}
			},	
			chipNumber : {
				presence : true,
				length : {
					minimum : 4,
					maximum: 15,
					message : "debe tener entre 4 y 15 caracteres"
				}
			},
			
//			birthdate: {
//				datetime: {
//				      dateOnly: true,
//				      latest: moment.utc().subtract(18, 'years'),
//				      message: "^You need to be atleast 18 years old" 
//				}
//			}

		});
	},
	valCust : function(customer) {
		return validate(customer, {
			firstName : {
				presence : true,
				length : {
					minimum : 4, 
					message : "debe tener entre 4 y 18 caracteres"
				}
			} 	

		});
	},
	
	
}

if (typeof module !== "undefined" && module.exports) {  
	module.exports = Validations;
}



