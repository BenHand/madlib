Rails.application.routes.draw do
  root 'application#index'

  # routes for loging in and out
  get 'sessions/destroy', as: 'logout'
  post 'sessions/create', as: 'login'
  get 'original_quotes/show', to: 'original_quotes#show'
  get 'inspire/show', to: 'inspirations#show'
  get 'mad_orig', to: 'mad_quotes#mad_orig'
  resources :users
  resources :original_quotes
  resources :mad_quotes

end
