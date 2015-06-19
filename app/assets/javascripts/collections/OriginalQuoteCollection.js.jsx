var OriginalQuoteCollection = Backbone.Collection.extend({
	model: QuoteModel,
	url: "original_quotes/show"
})