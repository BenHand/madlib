var RadLibs = React.createClass({
	render: function () {
		var newQuote = null
		var Origquote = null
		var changedInput = null
		var originalAuthor = null
		var newAuthor = null
		
		return (
			<div>
				<section className="create">
					<div className="newQuotePage">
						<div className="fun-quote">
							<div className="color-box">
								<div className="top"></div>
								<div className="right"></div>
								<div className="bottom"></div>
								<div className="left"></div>
								<div className="center">
									<h3 className="new"></h3>
									<p className="newAuth"> —Author</p>
								</div>
							</div>
						</div> 
						<div className="original-quote">
							<div className="center">
								<h3>Look familiar?</h3>
								<h3 className="orig"></h3>
								<p className="origAuth"></p>
							</div>
						</div>
					</div> 
					<div className="startQuote">
						<div className="directions center2">
							<h3>Enter a noun, verb, and adjective in the boxes below.</h3>
						</div>
						<div className="white-background">
							<div className="word-input center2">
								<form onSubmit={this.libSubmit}>
									<input type="text" className="noun-grab" placeholder='Noun' />
									<input type="text" className="verb-grab" placeholder='Verb' />
									<input type="text" className="adj-grab" placeholder='Adjective' />
									<button className="create-button btn">Submit</button>
								</form> 
							</div>
						</div> 
					</div>         
				</section>
					<div className="inspire-background">
						<div className="inspire-box">
							<div className="inspire center">
							</div>
							<button className="reload create-button btn center" onClick={this.reload}>Create again?!</button>
						</div>
					</div>
				<div className="logout-box">
					<button className="logout-button btn" onClick={this.logout}>Logout</button>
				</div>
			</div>

		);
	},
	libSubmit: function(e){
		e.preventDefault();
		var noun = $(".noun-grab");
		var verb = $(".verb-grab");
		var adj = $(".adj-grab");
		noun = "<span class='noun'>" + noun[0].value + "</span>";
		verb = "<span class='verb'>" + verb[0].value + "</span>";
		adj = "<span class='adjective'>" + adj[0].value + "</span>";
		Origquote = this.props.quote.quote;
		changedInput = this.props.quote.input_quote;
		originalAuthor = this.props.quote.author;
		newAuthor = user.name
		newQuote = changedInput.replace(/__NOUN__/g, noun);
		newQuote = newQuote.replace(/__VERB__/g, verb);
		newQuote = newQuote.replace(/__ADJECTIVE__/g, adj);
		var endQuote = newQuote;
		$(".startQuote").hide();
		$(".new").html('“' + endQuote + '”');
		$(".origAuth").html("— " + originalAuthor);
		$(".new").hide();
		$(".new").fadeIn(1000);
		$(".orig").html('“' + Origquote + '”');
		$(".orig").hide();
		$(".orig").fadeIn(1000);
		$(".newQuotePage").fadeIn(1000);
		$(".noun-grab").val("");
		$(".verb-grab").val("");
		$(".adj-grab").val("");
		$(".inspire-box").fadeIn(1000);
		$.get("inspire/show",function(inspi){
			$(".inspire").html('“' + inspi.inspire + '”')
		})
		$.post("mad_quotes", {
			user_id: user.id,
			original_quote_id: this.props.quote.id,
			fun_quote: endQuote

		}, "json")
		setTimeout(750, $.get("mad_quotes", function(madquote){
			for(var i=0; i < madquote.length; i++){
				$(".newAuth").html("— " + madquote[i].fun_author);
			}
		}))
	},
	reload: function(){
		$(".newQuotePage").hide();
		$(".startQuote").fadeIn(1000);
		$(".inspire-box").hide();
		myApp.navigate("");
		myApp.navigate("radlibs", {trigger: true})

 	},
 	logout: function(){
 		myApp.navigate("", {trigger: true})
		$(".regi-page").hide();
		$(".login-page").fadeIn(1000);
		$(".registration-form").submit(function(e){
			e.preventDefault();
			var newUser = new UserModel({
				name: $(".name-reg").val(),
				password: $(".password-reg").val(),
				password_confirmation: $(".password-conf-reg").val(),
				email: $(".email-reg").val()
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
				console.log(user);
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
	}
});