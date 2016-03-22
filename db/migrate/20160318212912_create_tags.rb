class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :game_id, null: false
      t.integer :x_coord
      t.integer :y_coord

      t.timestamps null: false
    end
    add_index :tags, :game_id
  end
end
