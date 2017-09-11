class Api::TeachersController < ApplicationController
    def index
        @teachers = Teacher.all
        render json: @teachers
    end
    private
    
      def teacher_params
        params.require(:teacher).permit(:name, :email, :image)
      end
end
