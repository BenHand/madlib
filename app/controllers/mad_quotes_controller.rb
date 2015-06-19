class MadQuotesController < ApplicationController

  def index
    render json: MadQuote.all
  end

  def show
    render json: MadQuote.find(params[:id])
  end

  def create
    original   = OriginalQuote.find(params[:id])
    fun_author = original.users.name
    MadQuote.create(fun_quote: params[:fun_quote], fun_author: fun_author,
                      user_id: sesssion[:user_id],
            original_quote_id: original.id)
  end

end
