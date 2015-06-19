var Login = React.createClass({
    render: function () {
        return (
          <div>
            <h1> Login </h1>
            <form className="login-form">
                <input className="email-log" type="text" placeholder="email"/>
            	<input className="password-log" type="password" placeholder="password"/>
            	<button>Login</button>
            </form>
          </div>
        );
    }
});
