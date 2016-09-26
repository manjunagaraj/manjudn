class Parent
	def method_a
		puts"tis is public"
	end
end
private
def method_b
	puts "this is private"
end
class Child<Parent
	def method_c
		c=Child.new
		c.method_a
	end 
end