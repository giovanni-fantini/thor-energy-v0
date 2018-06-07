Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/journeys', to: 'pages#journeys'
  get '/about', to: 'pages#about'
  get '/contact', to: 'pages#contact'
  resources :charging_stations

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :charging_stations, only: [] do
        resources :rentals, only: [ :index, :create ]
      end

      get 'rentals/:pan_hash', :to => 'rentals#find_by_pan_hash'
      get 'charging_stations/:charging_station_id/rentals/:status', :to => 'rentals#find_all_to_be_closed'
      patch 'rentals/:id', :to => 'rentals#update'
    end
  end
end
