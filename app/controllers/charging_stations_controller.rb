class ChargingStationsController < ApplicationController
  def index
    @charging_stations = ChargingStation.all
  end
end
