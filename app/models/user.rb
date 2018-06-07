class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :rentals

  # For activeadmin use:
  def name
    "#{id} - #{email}"
  end

  def open_rentals
    self.rentals.select { |rental| rental.status == "open" }
  end

  def closed_rentals
    self.rentals.select { |rental| rental.status == "closed" }
  end
end
