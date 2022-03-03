ActiveRecord::Schema[7.0].define(version: 2022_02_28_065724) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.date "dob"
    t.string "avatar"
    t.string "bio"
    t.string "website"
    t.string "pronouns"
    t.string "country"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
