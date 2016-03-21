class Game < ActiveRecord::Base
  has_many :tags

  def time_elapsed
    Datetime.now - self.created_at
  end
end
