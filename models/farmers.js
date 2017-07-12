var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var farmerSchema = new Schema({
	name :{
		type:String,
	},
	email:{
		type: String,
	},
	number : {
		type : Number,
		required :true,
		unique : true
	},
	gps : {
		lat : String,
		long : String,
	},
	location :{
		village : String,
		district : String,
		state : String,
		country : String
	},
	lastLogin: {
		type: String,
		default : "Never"
	},
	password :{
		type : String
	},
	_isEmail : {
		type : Boolean,
		default : false 
	},
	_isLogin : {
		type : Boolean,
		default : false 
	},
	_isPhone : {
		type : Boolean,
		default : false
	}
});
module.exports = mongoose.model('farmers', farmerSchema);

