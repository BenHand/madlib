class OriginalQuote < ActiveRecord::Base
  validates_presence_of :quote, :author, :input_quote
  has_many :mad_quotes
end
