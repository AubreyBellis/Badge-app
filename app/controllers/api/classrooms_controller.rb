class Api::ClassroomsController < ApplicationController
    def index
        @teacher = Teacher.find(params[:teacher_id])
        @classrooms = @teacher.classrooms.all
    
        render json:{teacher: @teacher, classrooms: @classrooms}
      end
    
      def show
        @teacher = Teacher.find(params[:teacher_id])
        @classroom = @teacher.classrooms.find params[:id]
    
        render json: @classroom
      end
      def create
        @classroom = Classroom.create!(classroom_params)
    
        redirect_to api_classroom_path(@classroom)
    end
    
    def update
        @classroom = Classroom.find params[:id]
        @classroom.update(classroom_params)
    end
    
    def destroy
        @classroom = Classroom.find params[:id]
        @classroom.destroy
    end
    
    private
    def classroom_params
        classroom_params = params.require(:classroom).permit(:grade_level)
      end
    end
    

