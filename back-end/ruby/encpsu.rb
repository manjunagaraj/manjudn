class Document
	attr_accessor:name
	def initialize(name)
		@name=name
	end
	def set_name(name)
		@nam=name
end
end
d=Document.new("name")
d.set_name('name1')