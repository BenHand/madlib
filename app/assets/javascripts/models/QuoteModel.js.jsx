var QuoteModel = Backbone.Model.extend({
	defaults: {
	id:null,
	quote:null,
	input_quote:null,
	author:null,
	category:null
	},
	urlRoot:"original_quotes/show",
	idAttribute:"id"
})