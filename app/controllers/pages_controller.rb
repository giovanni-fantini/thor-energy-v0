class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :journeys, :about, :contact]

  def home
  end

  def journeys
  end

  def contact
  end
end
