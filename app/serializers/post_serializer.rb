class PostSerializer < ActiveModel::Serializer
  attributes :id, :content_type, :caption, :content, :highlights, :user_id, :created_at, :summary

  def summary
    "#{self.object.content[0..400]}"
  end
end
