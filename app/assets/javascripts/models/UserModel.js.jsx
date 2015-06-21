var UserModel = Backbone.Model.extend({
	defaults: {
	id:null,
	name:null,
	email:null,
	password:null,
	password_confirmation:null,
	bio:null,
	pic_url:null,
	quote_count:null
	},

	urlRoot:"users",
	idAttribute:"id",

	validate: function(attr) {
		if(!attr.name) {
			return "Please enter a valid name.";
		}
		else if(!attr.email){
			return 'You must enter an email.'
		}
		else if(attr.email.indexOf("@") == -1){
			return 'Email must be in the correct format.'
		}
		else if(!attr.password) {
			return 'You must enter a password.';
		}
		else if(attr.password != attr.password_confirmation){
			return 'You must enter the same password.';
		}
		else if(attr.password.length < 6) {
			return 'Your password must be at least six characters.';
		}
		return false;
	}
})