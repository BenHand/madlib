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
	idAttribute:"id"
})