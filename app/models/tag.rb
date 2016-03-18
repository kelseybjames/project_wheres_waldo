class Tag < ActiveRecord::Base
  belongs_to :game
  belongs_to :user, through: :game
end
