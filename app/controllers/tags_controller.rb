class TagsController < ApplicationController
  
  def create
    # byebug
    @tag = Tag.new(whitelisted_params)
    @game = Game.first
    @tag.game_id = @game.id

    respond_to do |format|
      if @tag.save
        format.js {}
      else
        format.js {}
      end
    end
  end

  def destroy

  end

  private

  def whitelisted_params
    params.permit(:name)
  end
end
