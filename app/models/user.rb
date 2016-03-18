class User < ActiveRecord::Base
  has_many :games
  has_many :tags, through: :games
end
