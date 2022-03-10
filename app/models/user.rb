class User < ApplicationRecord
    # this macro will tell rails to use bcrypt gem to hash & salt all passwords
    has_secure_password

    # has_many :saved_posts
    # has_many :posts, through: :saved_posts
    has_many :posts
    has_many :statuses
    
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :password, length: { in: 6..20 }
    validates :full_name, length: { minimum: 5 }
    validates :bio, length: { maximum: 250 }
end
