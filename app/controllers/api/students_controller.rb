class Api::StudentsController < ApplicationController
    def index
        @classroom = Classroom.find(params[:classroom_id])
        @students = @classroom.students.all
    
        render json:{classroom: @classroom, students: @student}
      end
    
      def show
        @classroom = Classroom.find(params[:classroom_id])
        @student = @classroom.students.find params[:id]
    
        render json: @student
      end
end
