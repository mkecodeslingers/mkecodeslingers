class Topic < ActiveRecord::Base
	has_many :votes, dependent: :destroy
	validates :title, presence: true,
                    length: { minimum: 2 }
end
