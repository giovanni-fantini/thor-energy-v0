class ChargingStation < ApplicationRecord
<<<<<<< HEAD
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
=======
  validates :capacity, :address, :longitude, :latitude, :status, presence: true
  validates :capacity, inclusion: {in: (1..80).to_a, message: "%{value} is not a valid capacity (min 1, max 80)"}
  validates :capacity, numericality: { only_integer: true }
  validates :longitude, inclusion: {in: (-180..180).to_a }
  validates :latitude, inclusion: {in: (-90..90).to_a }
  validates :status, inclusion: {in: [true, false] }
  validate :battery_count_cannot_be_higher_than_capacity

  private

  def battery_count_cannot_be_higher_than_capacity
    return true if (battery_count == "" || battery_count.nil?)
    errors.add(:battery_count, "Can't be higher than capacity") if battery_count > capacity
  end
>>>>>>> 6ac5828d7c5d73a6b387898474dee9c4c1151f98
end
