var RadLibs = React.createClass({
	render: function () {
		var newQuote = null
		
		return (
			<div>
				<section className="create">
					<div className="newQuotePage">
						<div className="sample-quote">
							<div className="color-box">
								<div className="top"></div>
								<div className="right"></div>
								<div className="bottom"></div>
								<div className="left"></div>
								<div className="center">
									<h3 className="new"></h3>
									<p className="newAuth"> -- Author</p>
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
						<div className="inspire">
						</div>
						<button className="reload" onClick={this.reload}>Create again?</button>
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
		var Origquote = this.props.quote.quote;
		var changedInput = this.props.quote.input_quote;
		var originalAuthor = this.props.quote.author;
		var newAuthor = user.name
		noun = "<span class='noun'>" + noun[0].value + "</span>";
		verb = "<span class='verb'>" + verb[0].value + "</span>";
		adj = "<span class='adjective'>" + adj[0].value + "</span>";
		newQuote = changedInput.replace(/__NOUN__/g, noun);
		newQuote = newQuote.replace(/__VERB__/g, verb);
		newQuote = newQuote.replace(/__ADJECTIVE__/g, adj);
		var endQuote = newQuote;
		$(".startQuote").hide();
		$(".new").html(endQuote);
		$(".newAuth").html("-- " + newAuthor);
		$(".origAuth").html("-- " + originalAuthor);
		$(".new").hide();
		$(".new").fadeIn(1000);
		$(".orig").html(Origquote);
		$(".orig").hide();
		$(".orig").fadeIn(1000);
		$(".newQuotePage").fadeIn(1000);
		$(".noun-grab").val("");
		$(".verb-grab").val("");
		$(".adj-grab").val("");
		$.get("inspire/show",function(inspi){
			$(".inspire").html('" ' + inspi.inspire + ' "')
		})
	},
	reload: function(){
		$(".newQuotePage").hide();
		$(".startQuote").fadeIn(1000);
		myApp.navigate("");
		myApp.navigate("radlibs", {trigger: true})

 	},
 	logout: function(){
 		myApp.navigate("", {trigger: true})
		$(".regi-page").hide();
		$(".login-page").fadeIn(1000);
		$(".signup-button").hide();
		$(".hide-me-relog").hide();
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
	}
});