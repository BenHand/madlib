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
		profile: function(user) {
			React.render(<Profile user={user}/>, document.querySelector('#container'));
		},
		radlibs: function() {
			$.get("original_quotes/show", function(quote){
				React.render(<RadLibs quote={quote}/>, document.querySelector('#container'));
			})
		}
});

var myApp = new App();
Backbone.history.start();
myApp.navigate('');

var user = null;

$(".registration-form").submit(function(e){
	e.preventDefault();
	var username = $(".name-reg").val();
	var pass = $(".password-reg").val();
	var passCon = $(".password-conf-reg").val();
	var userEmail = $(".email-reg").val();
	var newUser = new UserModel({
		name: username,
		password: pass,
		password_confirmation: passCon,
		email: userEmail
	});
	if(!newUser.isValid()) {
		alert(newUser.validationError);
	}
	else{
	$(".regi-page").hide();
	$(".login-page").fadeIn(1000);
	newUser.save();
	myApp.navigate("radlibs", {trigger: true})
	}
});
$(".login-form").submit(function(e){
	e.preventDefault();
	$.post(
		"/sessions/create",
		{
			email: $(".email-log").val(),
			password: $(".password-log").val()
		}

	)
	.success(function(u){
		user = u
		myApp.navigate("radlibs", {trigger: true})
	})
	.error(function(errorMsg){
		alert("Please enter a valid name and password!")

	})
})

$(".login-button").click(function(){
	$(".regi-page").hide();
	$(".login-page").fadeIn(1000);

})
$(".signup-button").click(function(){
	$(".login-page").hide();
	$(".regi-page").fadeIn(1000);

})
