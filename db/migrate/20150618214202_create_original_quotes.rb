class CreateOriginalQuotes < ActiveRecord::Migration
  def change
    create_table :original_quotes do |t|
      t.string :quote, null: false
      t.string :input_quote, null: false
      t.string :author, null: false, default: 'Anonymous'
      t.string :category, null: false, default: 'General'
      t.timestamps null: false
    end
  end
end
