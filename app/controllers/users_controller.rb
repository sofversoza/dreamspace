class UsersController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index, :create]
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index
        users = User.all
        render json: users      
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        # user = User.find(params[:id])
        user = @current_user
        user.update!(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end


    private

    # def authorize
    #     @current_user = User.find_by(id: session[:user_id])
    #     render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
    # end

    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :full_name, :dob, :avatar, :bio, :website, :pronouns, :country)
    end

    # def render_unprocessable_entity_response(e)
    #     render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    # end

end
