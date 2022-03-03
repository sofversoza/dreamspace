Rails.application.routes.draw do
  
  resources :users

  # USERS
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  
  # SESSIONS
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # custom route to handle requests that come through that arent requests
  # for our API routes by returning the public/index.html file instead
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
