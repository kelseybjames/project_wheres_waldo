class TagsController < ApplicationController
  
  def create
    @tag = Tag.new(whitelisted_params)
    @game = Game.first
    @game.score = 5
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
    @tag = Tag.find(params[:id])
    respond_to do |format|
      if @tag.destroy
        format.js {}
      else
        format.js {}
      end
    end
  end

  private

  def whitelisted_params
    p params
    params.require(:tag).permit(:name, :x_coord, :y_coord)
  end
end
