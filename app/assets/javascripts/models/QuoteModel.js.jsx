var QuoteModel = Backbone.Model.extend({
	defaults: {
	_id:null,
	quote:null,
	input_quote:null,
	author:null,
	category:null
	},
	urlRoot:"original_quotes/show",
	idAttribute:"_id"
})