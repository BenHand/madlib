class InspirationsController < ApplicationController

  def show
    inspire = Inspiration.all
    inspiration = inspire.sample
    render json: inspiration, status: 200
  end

end
