var Registration = React.createClass({
    render: function () {
        return (
          	<div>
                <div className="center regi-page">
                    <h2>Author your own!</h2>
                    <div className="wrapper">
                        <div className="sign-up">
                            <h3>Sign Up</h3>
                            <form className="registration-form">
                            	<div>
                                <input type="text" className="name-reg" placeholder="Name"/>
                                </div>
                                <div>
                                <input type="text" className="email-reg" placeholder="Email"/>
                                </div>
                                <div>
                                <input type="text" className="password-reg" placeholder="Password"/>
                                </div>
                                <div>
                                <input type="text" className="password-conf-reg" placeholder="Password"/>
                                </div>
                                <button className="create-button btn">Register</button>
                            </form>
                        	<div>
                                <h4>Already an author?</h4>
                                <button className="login-button btn">Login now!</button>
                            </div>
                        </div>
                    </div>
                </div>
          	</div>
        );
    }
});