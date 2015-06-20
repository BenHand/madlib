var RadLibs = React.createClass({
	render: function () {
		var newQuote = null
		var chicken = {}
		var inputQuoteHtml = this.props.quote.input_quote;
		var replacedHtml = inputQuoteHtml.replace(/__NOUN__/g, "<input type='text' class='noun-grab' placeholder='Noun'/>")
		replacedHtml = replacedHtml.replace(/__VERB__/g, "<input type='text' class='verb-grab' placeholder='Verb'/>")
		replacedHtml = replacedHtml.replace(/__ADJECTIVE__/g, "<input type='text' class='adj-grab' placeholder='Adjective'/>")

		return (
			<div>
				<div>
				{user.name}
				</div>
				<form className="changeMe" onSubmit={this.libSubmit}>
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
				<div className="new">
				</div>
				<div className="orig">
				</div>
			</div>

		);
	},
	libSubmit: function(e){
		e.preventDefault();
		var noun = $(".noun-grab")
		var verb = $(".verb-grab")
		var adj = $(".adj-grab")
		var Origquote = this.props.quote.quote;
		var changedInput = this.props.quote.input_quote
		noun = noun[0].value
		verb = verb[0].value
		adj = adj[0].value
		newQuote = changedInput.replace(/__NOUN__/g, noun)
		newQuote = newQuote.replace(/__VERB__/g, verb)
		newQuote = newQuote.replace(/__ADJECTIVE__/g, adj)
		console.log(newQuote);
		$(".changeMe").fadeOut(1000)
		$(".new").html(newQuote)
		$(".new").hide()
		$(".new").fadeIn(1000);
		$(".orig").html(Origquote)
		$(".orig").hide()
		$(".orig").fadeIn(1000);
	}
});
