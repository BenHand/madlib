class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
   new_user = User.create(user_params)
   render json: new_user
  end

private

  def user_params
    params.require(:user).permit(:name, :email, :password,
                                 :password_confirmation, :bio, :pic_url)
  end

end
