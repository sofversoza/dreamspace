class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.date :dob
      t.string :avatar
      t.string :bio
      t.string :website
      t.string :pronouns
      t.string :country
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
