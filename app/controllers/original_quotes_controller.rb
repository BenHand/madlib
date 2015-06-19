class OriginalQuotesController < ApplicationController

  def index
    render json: OriginalQuote.all
  end

# returns a random quote from original quotes table
  def show
    quotes = OriginalQuote.all
    @quote = quotes.sample
    render json: @quote
  end

end
