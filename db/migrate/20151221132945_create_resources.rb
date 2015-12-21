class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :name
      t.string :resource_type
      t.string :external_link
      t.text :description
      t.string :category
      t.timestamps null: false
    end
  end
end
