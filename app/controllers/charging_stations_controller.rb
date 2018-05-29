class ChargingStationsController < ApplicationController
  skip_before_action :authenticate_user!
  def index
    @charging_stations = ChargingStation.all

    @markers = @charging_stations.map do |charging_station|
      {
        position: { lat: charging_station.latitude, lng: charging_station.longitude },
        title: charging_station.location_title,
        address: charging_station.address,
        capacity: charging_station.capacity,
        battery_count: charging_station.battery_count,
        id: charging_station.id
      }
    end
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
