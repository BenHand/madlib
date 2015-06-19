class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    User.create(user_params)
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation, :bio, :pic_url)
  end

end
