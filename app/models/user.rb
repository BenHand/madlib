class User < ActiveRecord::Base
  validates_presence_of :name, :email,
                        :password,
                        :password_confirmation, :on => :create

  validates_uniqueness_of :email

  has_secure_password
  has_many :mad_quotes, dependent: :destroy
end
