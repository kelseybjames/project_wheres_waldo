class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :score

      t.timestamps null: false
    end
    add_index :games, :user_id
    add_attachment :games, :image
  end
end
