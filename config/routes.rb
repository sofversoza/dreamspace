Rails.application.routes.draw do

  # route to test your configuration
  get '/hello', to: 'application#hello_world'



  # custom route to handle requests that come through that arent requests
  # for our API routes by returning the public/index.html file instead
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
