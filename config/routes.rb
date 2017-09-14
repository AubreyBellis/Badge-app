Rails.application.routes.draw do
  namespace :api do
    resources :teachers do 
      resources :classrooms 
    end

    resources :classrooms do 
        resources :students
    end 
  end 
end

