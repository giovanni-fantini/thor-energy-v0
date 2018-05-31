class ChargingStationPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def show?
    user.admin?
  end

  def new?
    user.admin?
  end

  def create?
    new?
  end

  def edit?
    user.admin?
  end

  def update?
    edit?
  end
end
