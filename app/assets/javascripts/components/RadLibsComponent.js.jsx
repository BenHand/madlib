var RadLibs = React.createClass({
	render: function () {
		var quoteHtml = this.props.quote.quote
		var replacedHtml = quoteHtml.replace(/for/g, "<input type='text' placeholder='noun' class='noun-grab' />")
		replacedHtml = replacedHtml.replace(/__NOUN__/g, "<input type='text'/>")
		replacedHtml = replacedHtml.replace(/__VERB__/g, "<input type='text'/>")
		replacedHtml = replacedHtml.replace(/__ADJECTIVE__/g, "<input type='text'/>")
		return (
			<div>
				<div>
				{user.name}
				</div>
				<form onSubmit={this.libSubmit}>
					<div dangerouslySetInnerHTML={{__html: replacedHtml}} />
					<button>Submit</button>
				</form>
			</div>

		);
	},
	libSubmit: function(e){
		e.preventDefault();
		var noun = $(".noun-grab")
		var verb = $(".verb-grab")
		var adj = $(".adj-grab")
		console.log("woooo")
	}
});
	// 	var supaStyle = {
	// 	color: "blue",
	// 	fontSize: 150,
	// 	backgroundColor:"black"
	// };
