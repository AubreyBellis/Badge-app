class AddApiIdToTeachers < ActiveRecord::Migration[5.1]
  def change
    add_column :teachers, :api_id, :string
  end
end
