class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  protected 
    # params.require(:sign_up).permit(:email, :password, :first_name, :last_name)
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
    end
end
