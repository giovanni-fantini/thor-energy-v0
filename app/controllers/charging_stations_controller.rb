class ChargingStationsController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @charging_stations = ChargingStation.all
  end
end
