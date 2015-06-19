class OriginalQuotesController < ApplicationController

  def index
    render json: OriginalQuote.all
  end

  def show
    quotes = OriginalQuote.all
    @quote = quotes.sample
    render json: @quote
  end

end
