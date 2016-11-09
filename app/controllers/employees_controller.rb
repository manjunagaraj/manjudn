class EmployeesController < ApplicationController


def index
	@employees=Employee.all
end




def create
	@employee=Employee.new(employee_params)
	binding.pry
	@employee.save
	redirect_to employees_list_path
end
	
private
def employee_params
	params.require(:employee).permit(:name,:age,:designation,:company_id)
end

end
