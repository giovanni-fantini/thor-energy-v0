class AddLocationTitleToChargingStations < ActiveRecord::Migration[5.2]
  def change
    add_column :charging_stations, :location_title, :string
  end
end
