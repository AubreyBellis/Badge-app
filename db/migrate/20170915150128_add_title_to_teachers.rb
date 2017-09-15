class AddTitleToTeachers < ActiveRecord::Migration[5.1]
  def change
    add_column :teachers, :title, :string
  end
end
