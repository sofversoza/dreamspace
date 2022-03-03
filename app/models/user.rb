class User < ApplicationRecord
    # this macro will tell rails to use bcrypt gem to hash & salt all passwords
    has_secure_password
    
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
end
