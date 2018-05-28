class CreateChargingStations < ActiveRecord::Migration[5.2]
  def change
    create_table :charging_stations do |t|
      t.integer :capacity
      t.string :address
      t.float :longitude
      t.float :latitude
      t.integer :battery_count
      t.boolean :status

      t.timestamps
    end
  end
end
