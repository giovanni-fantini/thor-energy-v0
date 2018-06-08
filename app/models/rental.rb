class Rental < ApplicationRecord
  belongs_to :charging_station
  belongs_to :user
end
