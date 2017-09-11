require_relative './classroom_data.rb'
require_relative './teacher_data.rb'

Classroom.destroy_all
Teacher.destroy_all

classroom_data = get_classroom_data
teacher_data = get_teacher_data

classroom_data.each_pair do |teacher_name, classrooms|
  info = teacher_data[teacher_name]
  current_teacher = Teacher.create!({
    name:         info[:name],
    email:    info[:email],
    image:  info[:image]
  })

  classrooms.each do |classroom|
    Classroom.create!({
      grade_level:        classroom[:grade_level],
      students:        classroom[:students]
      teacher:       current_teacher
    })
  end
end