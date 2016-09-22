class Animal
	def lion_sound
	puts"roar"
end

def elephant_sound
	puts"trumph"
end
def dog_sound
	puts"wolf"
end

end

class Lion<Animal
end
a=Lion.new
puts a.lion_sound

class Elephant<Animal
end
b=Elephant.new
puts b.elephant_sound

class Dog<Animal
end
c=Dog.new
puts c.dog_sound

 
