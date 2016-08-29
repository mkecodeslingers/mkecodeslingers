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
		if params[:content].present? # honeypot check
			@resource = ""
		else
			@resource = Resource.new(resource_params) 
		end
		if (!@resource.blank?)
  			if @resource.save
  				redirect_to @resource
  			else
    			render 'new'
  			end
		else
			redirect_to resources_path
  		end
  	end

  	def update
	  	if params[:content].present? # honeypot check
			@resource = ""
		else
			@resource = Resource.find(params[:id])
		end
 		if (!@resource.blank?)
	  		if @resource.update(resource_params)
	    		redirect_to @resource
	  		else
	    		render 'edit'
	  		end
  		else
			redirect_to resources_path
	  	end
	end

	def destroy
	  @resource = Resource.find(params[:id])
	  @resource.destroy
	 
	  redirect_to resources_path
	end	

  	private
  		def resource_params
    		params.require(:resource).permit(:name, :resource_type, :external_link, :description, :category, :content)
  		end
end