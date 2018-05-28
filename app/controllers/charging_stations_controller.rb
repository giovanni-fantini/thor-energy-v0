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
        battery_count: charging_station.battery_count
      }
    end
  end
end
