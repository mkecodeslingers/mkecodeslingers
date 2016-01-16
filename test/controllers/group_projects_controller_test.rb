require 'test_helper'

class GroupProjectsControllerTest < ActionController::TestCase
  test "should get group_projects" do
    get :group_projects
    assert_response :success
  end

end
