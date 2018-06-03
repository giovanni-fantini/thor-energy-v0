class ChangePanHashToBeStringInRentals < ActiveRecord::Migration[5.2]
  def change
    change_column :rentals, :pan_hash, :string
  end
end
