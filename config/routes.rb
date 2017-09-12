Rails.application.routes.draw do
  namespace :api do
    resources :teachers do 
      resources :classrooms
      end
    end

    namespace :api do 
      resources :classrooms do 
        resources :students
      end 
    end 
  end