class Api::TeachersController < ApplicationController
    def index
        @teachers = Teacher.all
        render json: @teachers
    end
    def show
      @teacher = Teacher.find(params[:id])
      @classrooms = @teacher.classrooms.all
      render json: {
        teacher: @teacher,
        classrooms: @classroom
      }
    end
  
    def create
      @teacher = Teacher.new teacher_params
  
      if @teacher.save
        render json: @teacher
      else
        render json: {
          message: 'Error when creating Teacher'
        }
      end
    end
  
    def update
      @teacher = Teacher.find params[:id]
  
      if @teacher.update(teacher_params)
        render json: @teacher
      else
        render json: {
          message: 'Error when updating teacher'
        }
      end
    end
  
    def destroy
      @teacher = Teacher.find(params[:id])
      @teacher.destroy
  
      render json: {
        message: 'Teacher successfully destroyed'
      }
    end
    private
    
      def teacher_params
        params.require(:teacher).permit(:name, :email, :image)
      end
end
