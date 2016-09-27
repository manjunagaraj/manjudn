module Plane
	CAN_GO_FAST=true
	CAN_IT_FLY=true

	def fly(fly)
		@fly=fly
		
		puts" #{@fly},plane can fly"
	end
end
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
	include Plane
	extend Car
end
object=Vehicle.new
object.go_fast(true)
object.fly(true)
Vehicle.go_fast(true)
