class Teacher < ApplicationRecord
    has_many :classrooms, dependent: :destroy
end
