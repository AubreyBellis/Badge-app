class AddQuoteToStudents < ActiveRecord::Migration[5.1]
  def change
    add_column :students, :quote, :string
  end
end
