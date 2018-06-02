Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/journeys', to: 'pages#journeys'
  resources :charging_stations

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :charging_stations, only: [ :show ] do
        resources :rentals, only: [ :index, :create, :update ]
      end

      get 'rentals/:pan_hash', :to => 'rentals#find_by_pan_hash'
      get 'charging_stations/:charging_station_id/rentals/:status', :to => 'rentals#find_by_status'
    end
  end
end
