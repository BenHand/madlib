class UsersController < ApplicationController

  def index
    render json: User.all.order(:quote_count).reverse, status: 200
  end

  def show
    user = User.find(params[:id])
    madq = MadQuote.where(user_id: user.id)
    render json: [user, madq], status: 200
  end

  def create
   new_user = User.create!(name: params[:name], email: params[:email],
                       password: params[:password],
                       password_confirmation: params[:password_confirmation])
   render json: new_user, status: 200
  end

end
