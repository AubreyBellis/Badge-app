class Api::ClassroomsController < ApplicationController
    def index
        @teacher = Teacher.find(params[:teacher_id])
        @classrooms = @teacher.classrooms.all
    
        render json: @teachers
      end
    
      def show
        @teacher = Teacher.find(params[:teacher_id])
        @classroom = @teacher.classrooms.find params[:id]
    
        render json: @classroom
      end
    
end
