class Api::TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
end

def show
    
    @teacher = Teacher.find params[:id]
    @classrooms = @teacher.classrooms.all
    render json: {teacher: @teacher, 
                classrooms: @classrooms}
end

def create
    @teacher = Teacher.create!(teacher_params)

    redirect_to api_teacher_path(@teacher)
end

def update
    @teacher = Teacher.find params[:id]
    @teacher.update(teacher_params)
end

def destroy
    @teacher = Teacher.find params[:id]
    @teacher.destroy
end

private
def teacher_params
    teacher_params = params.require(:teacher).permit(:name, :email, :image)
  end
end
