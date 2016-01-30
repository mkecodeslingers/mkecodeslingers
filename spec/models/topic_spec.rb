require 'rails_helper'

describe Topic do
  it { is_expected.to have_many(:votes).dependent(:destroy) }

  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_length_of(:title).is_at_least(2) }
end
