class ChangeContentTypeToTextInPosts < ActiveRecord::Migration[7.0]
  def change
    change_column :posts, :content_type, :text
  end
end
