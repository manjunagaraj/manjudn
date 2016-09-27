module Plane
	CAN_GO_FAST=true
	CAN_IT_FLY=true

	def Plane.fly(fly)
		@fly=fly
		
		puts" #{@fly},plane can fly"
	end
end
	