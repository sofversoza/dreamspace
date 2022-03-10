Rails.application.routes.draw do
  root "pages#index"
  # resources :statuses
  # resources :saved_posts
  # resources :tags
  # resources :post_tags

  # SESSIONS
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :posts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:create, :show, :index, :destroy, :update]
  

  # USERS
  get "/me", to: "users#show"
  post "/signup", to: "users#create"


  # POSTS
  # get "/posts", to: "posts#index"
  # get "/posts/:id", to: "posts#show"
  # post "/users/:user_id/posts", to: "posts#create"
  # get "/users/:user_id/posts", to: "posts#index"




  # custom route to handle requests that come through that arent requests
  # for our API routes by returning the public/index.html file instead

  # get '*path',
  #   to: 'fallback#index',
  #   constraints: ->(req) { !req.xhr? && req.format.html? }

  get "*path", to: "pages#index", via: :all
end
