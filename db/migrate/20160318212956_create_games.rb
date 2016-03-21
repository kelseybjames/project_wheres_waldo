class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :score

      t.timestamps null: false
    end
    add_attachment :games, :image
  end
end
