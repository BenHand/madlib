class User < ActiveRecord::Base
  validates_presence_of :name, :email,
                        :password,
                        :password_confirmation

  validates_uniqueness_of :email

  has_secure_password
  has_many :mad_quotes
end
