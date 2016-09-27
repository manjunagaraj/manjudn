module Car
	CAN_GO_FAST=true
	CAN_IT_FLY=true

	def go_fast(fast)
		@fast=fast
		puts"#{@fast},car can go fast"
	end
end
class Vehicle
	include Car
	
end
object=Vehicle.new
object.go_fast(true)

	