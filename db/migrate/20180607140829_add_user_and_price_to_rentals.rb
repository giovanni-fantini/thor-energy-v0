class AddUserAndPriceToRentals < ActiveRecord::Migration[5.2]
  def change
    add_reference :rentals, :user, foreign_key: true
    add_column :rentals, :price, :integer
  end
end
