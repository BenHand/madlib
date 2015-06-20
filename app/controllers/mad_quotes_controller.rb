class MadQuotesController < ApplicationController

  def index
    render json: MadQuote.all
  end

  def show
    render json: MadQuote.find(params[:id])
  end

  def create
    user        = User.find(params[:user_id])
    original    = OriginalQuote.find(params[:original_quote_id])
    author_name = original.author.split(" ")
    user_name   = user.name.split(" ")
    fun_quote   = params[:fun_quote].gsub(/<[^>]*>/, "")
    fun_author  = (user_name[0] + " " + author_name[1]).titleize
    mad_quote   = MadQuote.create(fun_quote: fun_quote,
                                 fun_author: fun_author,
                                    user_id: user.id,
                          original_quote_id: original.id)

    render json: mad_quote, status: 200
  end

end
