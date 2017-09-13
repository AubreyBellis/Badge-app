class CreateGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :grades do |t|
      t.integer :quarter
      t.string :subject
      t.string :api_grade
      t.references :student, foreign_key: true

      t.timestamps
    end
  end
end
