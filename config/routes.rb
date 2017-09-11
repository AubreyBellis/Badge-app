Rails.application.routes.draw do
  namespace :api do
    resources :teacher do
      resources :classroom do
        resources :student, only: [:index, :show]
      end
    end
  end 
end 