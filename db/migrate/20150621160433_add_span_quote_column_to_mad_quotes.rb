class AddSpanQuoteColumnToMadQuotes < ActiveRecord::Migration
  def change
    add_column :mad_quotes, :span_quote, :string
  end
end
