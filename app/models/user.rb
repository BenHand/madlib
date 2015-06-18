class User < ActiveRecord::Base
  validates_presence_of :username, :email,
                        :password,
                        :password_confirmation
  has_secure_password
  has_many :mad_quotes
end
