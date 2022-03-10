class CreateStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :statuses do |t|
      t.string :activity
      t.string :value
      t.integer :user_id

      t.timestamps
    end
  end
end
