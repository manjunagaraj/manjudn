class Mamal
	def inheritance
		puts"inhretance"
	end 
end

class Cat < Mamal
	def speak
		puts"hello"
	end 

end

c=Cat.new
c.inheritance
c.speak