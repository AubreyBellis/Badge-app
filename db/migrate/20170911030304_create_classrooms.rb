class CreateClassrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :classrooms do |t|
      t.string :grade_level
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
