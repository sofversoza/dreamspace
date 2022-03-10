class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :content_type
      t.string :caption
      t.boolean :highlights
      t.integer :user_id

      t.timestamps
    end
  end
end
