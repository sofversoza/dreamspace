class ApplicationController < ActionController::API
    include ActionController::Cookies   #to access cookies hash in all controllers

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
