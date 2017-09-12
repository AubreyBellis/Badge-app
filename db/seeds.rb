# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Teacher.destroy_all
Teacher.create({name: "Mrs. Baker", email: "MrsBaker@gmail.com", image:"https://i.imgur.com/j7B9QUL.jpg"})
Teacher.create({name: "Mr. Wren", email: "MrWren@gmail.com", image:"https://i.imgur.com/TIj5Hxg.jpg"})


