json.array! @rentals do |rental|
  json.extract! rental, :id, :charging_station_id, :slot_id, :pan_hash, :transaction_id, :status
end
