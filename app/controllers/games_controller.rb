class GamesController < ApplicationController

  def index
    @games = Game.all
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(whitelisted_params)
  end

  def show

  end

  private

  def whitelisted_params
    params.require(game).permit()
  end
end
