class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :journeys]

  def home
  end

  def journeys
  end
end
