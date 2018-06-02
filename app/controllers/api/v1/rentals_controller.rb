class Api::V1::RentalsController < Api::V1::BaseController
  before_action :set_rental, only: [ :show ]

  def index
    @charging_station = ChargingStation.find(params[:charging_station_id])
    @rentals = @charging_station.rentals
  end

  def show
  end

  def update
    if @rental.update(rental_params)
      render :show
    else
      render_error
    end
  end

  def find_by_pan_hash
    @rental = Rental.find_by(pan_hash: params[:pan_hash])
  end

  def find_all_by_status
    @charging_station = ChargingStation.find(params[:charging_station_id])
    @rentals = @charging_station.rentals.where(status: params[:status]).to_a
  end

  private

  def rental_params
    params.require(:rental).permit(:slot_id, :pan_hash, :transaction_id, :status)
  end

  def render_error
    render json: { errors: @rental.errors.full_messages },
      status: :unprocessable_entity
  end

  def set_rental
    @rental = Rental.find(params[:id])
  end
end
