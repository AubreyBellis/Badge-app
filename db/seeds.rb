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

teacher_one = Teacher.create({name: "Mrs. Baker",title:'Drama Teacher', email: "MrsBaker@gmail.com", image:"https://i.imgur.com/j7B9QUL.jpg"})
teacher_two = Teacher.create({name: "Mr. Wren", title:'AP Environmental Science',email: "MrWren@gmail.com", image:"https://i.imgur.com/H8eP2Nv.jpg"})
teacher_three = Teacher.create({name: "Mr.B", title:'JV Football Coach', email: "MrB@gmail.com", image:"https://i.imgur.com/dHV2RNd.jpg"})

classroom_one = Classroom.create({grade_level: "10th & 11th", teacher_id: teacher_one.id})
classroom_two  = Classroom.create({grade_level: "11th",  teacher_id: teacher_two.id})
classroom_three  = Classroom.create({grade_level: "10th",  teacher_id: teacher_two.id})
classroom_four  = Classroom.create({grade_level: "10th & 11th",  teacher_id: teacher_three.id})

student_two = Student.create({name: 'Lisa Low', quote:'"Hannah Montana said nobody\'s perfect but here I am"',age: '15', image:'https://i.imgur.com/pnp7q0f.jpg', classroom_id:classroom_two.id})
student_three = Student.create({name: 'John King',quote:'"John just stole my girl" -everyone ', age: '16', image:'https://i.imgur.com/NpdwiLN.jpg', classroom_id:classroom_two.id})
student_four = Student.create({name: 'Alex Smith', quote:'"I didn\'t choose the thug life, the thug life chose me"',age: '17', image:'https://i.imgur.com/ZNfkhf5.jpg', classroom_id:classroom_two.id})
student_eight = Student.create({name: 'Ethan Brown',quote:'"The roof is not my son, but I will raise it"', age:'15', image:'https://i.imgur.com/P8QAqnk.jpg', classroom_id:classroom_two.id})

student_five = Student.create({name: 'Justin Beiber', quote:'"Love yourself"', age: '15', image:'https://i.imgur.com/g4gJ6FT.jpg', classroom_id:classroom_one.id})
student_six = Student.create({name: 'Amy Adams', quote:'"Donuts are always the answer"', age: '16', image:'https://i.imgur.com/eTEdQ5H.jpg', classroom_id:classroom_one.id})
student_seven = Student.create({name: 'Kristen Stewart', quote:'"I like vampires... "', age: '15', image:'https://i.imgur.com/UJSTjKX.jpg', classroom_id:classroom_one.id})

student_nine = Student.create({name: 'Evan Taylor', quote:'"High School Was Easy. It Was Like Riding A Bike. Except The Bike Was On Fire & The Ground Was On Fire & Everything Was On Fire Because It Was Hell"', age: '15', image:'https://i.imgur.com/uTFv3n9.jpg', classroom_id:classroom_four.id})
student_ten = Student.create({name: 'James Wheeler', quote:'"#NoFilter"', age: '15', image:'https://i.imgur.com/xR6OqOp.jpg', classroom_id:classroom_four.id})
student_eleven = Student.create({name: 'Big Donnie', quote:'"Education is important but big biceps are importanter"', age: '15', image:'https://i.imgur.com/kx6c1Gi.jpg', classroom_id:classroom_four.id})


# grade_one = Grade.create({student_id: student_one.id, quarter: 1, subject: 'Reading'})

# grade_two = Grade.create({student_id: student_two.id, quarter: 1, subject: 'Writing'})