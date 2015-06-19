class MadQuote < ActiveRecord::Base
  validates_presence_of :user_id, :original_quote_id, :fun_quote
  belongs_to :user
  belongs_to :original_quote
end
