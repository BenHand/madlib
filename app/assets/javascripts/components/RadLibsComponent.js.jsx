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
									<p> -- Author</p>
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
						<button className="reload" onClick={this.reload}>Create again?</button>
					</div>
					<div className="startQuote">
						<div className="directions">
							<h3>Enter your word(s) for each space.</h3>
						</div>
						<div className="word-input center">
						<form onSubmit={this.libSubmit}>
							<div>
								<input type="text" className="noun-grab" placeholder='Noun' />
							</div>
							<div>
								<input type="text" className="verb-grab" placeholder='Verb' />
							</div>
							<div>
								<input type="text" className="adj-grab" placeholder='Adjective' />
							</div>
							<button>Submit</button>
						</form>
						</div>
					</div>            
				</section>
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
		noun = "<span class='noun'>" + noun[0].value + "</span>";
		verb = "<span class='verb'>" + verb[0].value + "</span>";
		adj = "<span class='adjective'>" + adj[0].value + "</span>";
		newQuote = changedInput.replace(/__NOUN__/g, noun);
		newQuote = newQuote.replace(/__VERB__/g, verb);
		newQuote = newQuote.replace(/__ADJECTIVE__/g, adj);
		var endQuote = newQuote;
		$(".startQuote").fadeOut(1000);
		$(".new").html(endQuote);
		$(".origAuth").html("-- " + originalAuthor);
		$(".new").hide();
		$(".new").fadeIn(1000);
		$(".orig").html(Origquote);
		$(".orig").hide();
		$(".orig").fadeIn(1000);
		$(".newQuotePage").fadeIn(1000);
		console.log(endQuote)
	},
	reload: function(){
		$(".newQuotePage").fadeOut(1000);
		$(".startQuote").fadeIn(1000);
		replaceProps(this.props.quote);
	}
});