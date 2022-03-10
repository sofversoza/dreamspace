class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :dob, :avatar, :bio, :website, :pronouns, :country, :username, :email, :password, :password_confirmation, :created_at

  has_many :posts
end
