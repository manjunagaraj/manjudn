class Animal
	def lion_sound(manju)
		@sound=manju

	end

end


class Dog<Animal
end
c=Dog.new
c.lion_sound("roar")

