Rails.application.routes.draw do
  resource :games
  root to: 'games#new'
end
