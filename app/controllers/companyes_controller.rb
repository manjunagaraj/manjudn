class CompanyesController < ApplicationController



	def index
	@companyes=Company.all
end




def create
	@company=Company.new(company_params)
	binding.pry
	@company.save
	redirect_to companyes_list_path
end
	
private
def company_params
	params.require(:company).permit(:name,:city)
end

end
