# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Teacher.destroy_all
Classroom.destroy_all
Student.destroy_all

# Grade.destroy_all

teacher_one = Teacher.create({name: "Mrs. Baker", email: "MrsBaker@gmail.com", image:"https://i.imgur.com/j7B9QUL.jpg"})
teacher_two = Teacher.create({name: "Mr. Wren", email: "MrWren@gmail.com", image:"https://i.imgur.com/TIj5Hxg.jpg"})

classroom_one = Classroom.create({grade_level: "Third Grade", teacher_id: teacher_one.id})
classroom_two  = Classroom.create({grade_level: "Fifth Grade",  teacher_id: teacher_two.id})
classroom_three  = Classroom.create({grade_level: "Second Grade",  teacher_id: teacher_two.id})

student_one = Student.create({name: 'Ethan Brown', age:'8', image:'https://i.imgur.com/P8QAqnk.jpg', classroom_id:classroom_one.id})
student_two = Student.create({name: 'Lisa Low', age: '10', image:'https://i.imgur.com/pnp7q0f.jpg', classroom_id:classroom_two.id})

# grade_one = Grade.create({student_id: student_one.id, quarter: 1, subject: 'Reading'})
# grade_two = Grade.create({student_id: student_two.id, quarter: 1, subject: 'Writing'})