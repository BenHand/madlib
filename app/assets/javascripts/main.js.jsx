var App = Backbone.Router.extend({
		routes: {
				'': 'home',
				'login': 'login',
				"profile/:user":    "profile",
				"radlibs":          "radlibs"      
		},
		home: function() {
			React.render(<Home/>, document.querySelector('#container'));
		},
		login: function() {
			React.render(<Edit/>, document.querySelector('#container'));
		},
		profile: function(user) {
			React.render(<Profile user={user}/>, document.querySelector('#container'));
		},
		radlibs: function() {
			React.render(<Radlibs/>, document.querySelector('#container'));
		}
});

var myApp = new App();
Backbone.history.start();
myApp.navigate('');

var origQuote = new OriginalQuoteCollection();
var user = null;
// var users = new UserCollection();
// users.fetch({success: function(){
// 	console.log(users.at(0).get("name"))
// }});
$(".registration-form").submit(function(e){
	e.preventDefault();
	var newUser = new UserModel({
		name: $(".name-reg").val(),
		password: $(".password-reg").val(),
		password_confirmation: $(".password-conf-reg").val(),
		email: $(".email-reg").val()
	});
		console.log(newUser);
		users.add(newUser);
		newUser.save();
});
$(".login-form").submit(function(e){
	$.post(
		"/session/create",
		{
			email: $(".email-log").val(),
			password: $(".password-log").val()
		}

	)
	.success(function(u){
		user = u
		myApp.navigate("rablibs", {trigger: true})
	})
	.error(function(errorMsg){
		alert("Please enter a valid name and password!")

	})
})

