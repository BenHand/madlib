var Login = React.createClass({
	render: function () {
		return (
			<div>
				<div className="center login-page">
					<h2>Author your own!</h2>
					<div className="wrapper">
						<div className="login">
							<h3>Login</h3>
								<form className="login-form">
									<div>
									<input className="email-log" type="text" placeholder="Email"/>
									</div>
									<div>
									<input className="password-log" type="password" placeholder="Password"/>
									</div>
									<button className="create-button btn">Create!</button>
								</form>
							<div>
								<h4 className="hide-me-relog">First timer?</h4>
								<button className="signup-button btn">Register Now!</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});