class AddGameIdIndexToTag < ActiveRecord::Migration
  def change
    add_index :tags, :game_id
  end
end
