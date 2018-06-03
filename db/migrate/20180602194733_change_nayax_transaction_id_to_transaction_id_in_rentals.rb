class ChangeNayaxTransactionIdToTransactionIdInRentals < ActiveRecord::Migration[5.2]
  def change
    rename_column :rentals, :nayax_transaction_id, :transaction_id
  end
end
