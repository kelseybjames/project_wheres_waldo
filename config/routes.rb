Rails.application.routes.draw do
  resource :game do
    resources :tags, only: [:create, :destroy]
  end
  root to: 'games#show'
end
