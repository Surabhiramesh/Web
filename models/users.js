var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name :{
		type:String,
		required : false
	},
	username:{
		type: String,
		required : true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	altEmail:{
		type: String,
		unique : false,
	},
	_isTeacher : {
		type :  Boolean,
		default : false	
	},
	lastLogin: {
		type: String,
		unique : false,
		default : "Never"
	},
	_isAdmin : {
		type : Boolean,
		default : false 
	},
	_isEmail : {
		type : Boolean,
		default : false 
	},
	_login : {
		type : Boolean,
		default : false 
	},
	_isActive : {
		type : Boolean,
		default : false
	},
	password:{
		type: String,
		required: true,
	},
	phone:{
		mobile:Number,
		isd:Number,
		std:Number,
		landline:Number
	},
	events : [{
		type : Schema.Types.ObjectId,
		ref : ""
	}],
	notifications : [{
	    type : Schema.Types.ObjectId,
	    ref : "apikeys"
	}],
	google : {
		token : String,
		refreshToken : String,
		name : String,
		image : String
	}
});
module.exports = mongoose.model('users', userSchema);

