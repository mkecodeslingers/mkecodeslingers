require 'rails_helper'

describe GroupProjectsController, type: :controller do
  describe "GET group_projects" do
    it "renders the group_projects template" do
      get :group_projects
      expect(response).to render_template("group_projects")
    end
  end
end
