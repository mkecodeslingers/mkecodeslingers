class CreateTopics < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :title
      t.text :description
      t.string :topic_type

      t.timestamps null: false
    end
  end
end
