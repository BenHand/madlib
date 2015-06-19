class CreateInspirations < ActiveRecord::Migration
  def change
    create_table :inspirations do |t|
      t.string :inspire, null: false
      t.timestamps null: false
    end
  end
end
