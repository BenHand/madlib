class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.text :bio, null: false, default: 'bio'
      t.string :pic_url, null: false, default: 'blank'
      t.integer :quote_count, null: false, default: '0'

      t.timestamps null: false
    end
  end
end
