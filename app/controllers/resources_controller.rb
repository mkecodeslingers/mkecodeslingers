class ResourcesController < ApplicationController
	def index
		@resources = Resource.all
	end

	def show
    	@resource = Resource.find(params[:id])
  	end

	def new
		@resource = Resource.new
	end

	def edit
	  @resource = Resource.find(params[:id])
	end

	def create
		@resource = Resource.new(resource_params)

  		if @resource.save
  			redirect_to @resource
  		else
    		render 'new'
  		end
  	end

  	def update
	  @resource = Resource.find(params[:id])
	 
	  if @resource.update(resource_params)
	    redirect_to @resource
	  else
	    render 'edit'
	  end
	end

	def destroy
	  @resource = Resource.find(params[:id])
	  @resource.destroy
	 
	  redirect_to resources_path
	end	

  	private
  		def resource_params
    		params.require(:resource).permit(:name, :resource_type, :external_link, :description, :category)
  		end
end