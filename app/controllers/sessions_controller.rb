class SessionsController < ApplicationController

  def new
  end

  def create
    @users = User.find_by_email(params[:email])
    if @users  && @users.authenticate(params[:password])
      session[:user_id] = @users.id
      render json: @users
    else
      render json: "Email or password does not match.", status: 401
    end
  end

  def destroy
    session[:user_id] = nil
    render json: 'Successfully logged out', status: 200
  end

end
