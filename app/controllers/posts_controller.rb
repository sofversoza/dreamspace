class PostsController < ApplicationController
    
    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = find_post
        render json: post
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def destroy
        post = @current_user.posts.find(params[:id]).destroy!
        head :no_content
    end


    private

    def find_user
        User.find(params[:user_id])
    end

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:id, :content_type, :caption, :highlights)
    end

end
