class StatusSerializer < ActiveModel::Serializer
  attributes :id, :activity, :value
end
