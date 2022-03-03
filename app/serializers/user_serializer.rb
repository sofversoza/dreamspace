class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :dob, :avatar, :bio, :website, :pronouns, :country, :username, :email, :password
end
