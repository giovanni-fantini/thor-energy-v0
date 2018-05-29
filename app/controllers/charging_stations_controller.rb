class ChargingStationsController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @charging_stations = ChargingStation.all
  end

  def new
    #add redirecting if user is not admin
    @charging_station = ChargingStation.new()
  end

  def create
    #add redirecting if user is not admin
    @charging_station = ChargingStation.new(charging_station_params)
    if @charging_station.save
      redirect_to charging_station_path(@charging_station)
    else
      render :new
    end
  end

  private

  def charging_station_params
    params.require(:charging_station).permit(:location_title, :address, :capacity, :battery_count, :status)
  end
end
