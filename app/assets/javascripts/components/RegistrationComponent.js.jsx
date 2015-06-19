var Home = React.createClass({
    render: function () {
        return (
          <div>
            <h1> REGISTRATION! WOOT </h1>
            <form className="registration-form">
            	<input className="name-reg" type="text" placeholder="name"/>
            	<input className="password-reg" type="password" placeholder="password"/>
            	<input className="password-conf-reg" type="password" placeholder="confirm password"/>
            	<input className="email-reg" type="text" placeholder="email"/>
            	<button>Register</button>
            </form>
          </div>
        );
    }
});
