class Api::StudentsController < ApplicationController
    def index
        @classroom = Classroom.find(params[:classroom_id])
        @students = @classroom.students.all
    
        render json:{classroom: @classroom, students: @students}
      end
    
      def show
        @classroom = Classroom.find(params[:classroom_id])
        @student = Student.find params[:id]
    
        render json: @student
      end
end
