class Calender
	def send_invite
		puts"send invite"
	end
	
end
class Response<Calender
	def send_response
		puts"response sent to Calender"
		

	end 
end
a=Response.new
a.send_invite
a.send_response