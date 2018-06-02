class CreateRentals < ActiveRecord::Migration[5.2]
  def change
    create_table :rentals do |t|
      t.references :charging_station, foreign_key: true
      t.integer :slot_id
      t.float :pan_hash
      t.integer :nayax_transaction_id
      t.timestamps
    end
  end
end
