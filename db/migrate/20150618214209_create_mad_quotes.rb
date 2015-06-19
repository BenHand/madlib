class CreateMadQuotes < ActiveRecord::Migration
  def change
    create_table :mad_quotes do |t|
      t.string :fun_quote, null: false
      t.string :fun_author, null: false, default: 'Fun Author'
      t.belongs_to :user, index: true, foreign_key: true
      t.belongs_to :original_quote, index: true, foreign_key: true
      t.timestamps null: false
    end
  end
end
