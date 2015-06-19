class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_filter :current_user

  def current_user
    if @current_user.nil?
      if session[:user_id].present?
        @current_user = User.find(session[:user_id])
      end
    else
      @current_user
    end
  end

  helper_method :current_user

  def authenticate_user!
    if current_user == nil
      redirect_to login_path, alert: 'You must be logged in.'
    end
  end

end
