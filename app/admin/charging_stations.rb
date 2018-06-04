ActiveAdmin.register ChargingStation do

  index do
    selectable_column
    column :id
    column :battery_count
    column :capacity
    column :address
    column :location_title
    column :latitude
    column :longitude
    column :status
    column :created_at
    column :updated_at
    actions
  end

  permit_params :capacity, :address, :longitude, :latitude, :status, :title
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
