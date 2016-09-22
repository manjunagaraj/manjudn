class  Bird

	
		
			
			def speak(sound)
			@sound=sound


		def fly(fly)

		end
	end
end
class Duck<Bird
	def fly
		def speak
			puts @sound
		end
	end
end
class Penguin<Bird
	def speak
		def fly
			puts@sound
		end
	end
end
a=Bird.new
a.sound("w")
b=Penguin.new
b.Penguin("fly")
c=Duck.new
c.speak("qua qua")




