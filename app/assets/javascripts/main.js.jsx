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