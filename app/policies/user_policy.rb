class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope
    end
  end

  def update?
    @user == user
  end

  def destroy?
    record.user == user
  end
end
