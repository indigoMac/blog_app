class Article < ApplicationRecord

    # attribute :title
    # attribute :description

    validates :title, presence: true, length: { minimum: 4, maximum: 100 }
    validates :description, presence: true, length: { minimum: 6, maximum: 300 }
end
