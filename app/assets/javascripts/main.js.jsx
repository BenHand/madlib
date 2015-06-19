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
var users = new UserCollection();
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

$(".pull").click(function(){
	users.fetch();
});