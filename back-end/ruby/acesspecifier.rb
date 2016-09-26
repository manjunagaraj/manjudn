class Parent
	def method_a
		puts"tis is public"
	end
end
private
def method_b
	puts "this is private"
end
protected
def method_c

class Child<Parent
	def method_c
	end
end

		c=Child.new
		c.method_a
		
	
