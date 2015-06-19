class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
   new_user = User.create!(name: params[:name], email: params[:email],
                       password: params[:password],
                       password_confirmation: params[:password_confirmation])
   render json: new_user
  end

end
