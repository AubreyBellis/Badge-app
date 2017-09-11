require_relative './classroom_data.rb'
require_relative './student_data.rb'

Classroom.destroy_all
Student.destroy_all

classroom_data = get_classroom_data
student_data = get_student_data

classroom_data.each_pair do |student_name, classroom|
  info = student_data[student_name]
  current_student = student_name.create!({
    name:           info[:name],
    age:            info[:age],
    progress_report:   info[:progess_report]
  })

  classrooms.each do |classroom|
    Classroom.create!({
      grade_level:        classroom[:grade_level],
      students:        classroom[:students]
      teacher:       current_teacher
    })
  end
end