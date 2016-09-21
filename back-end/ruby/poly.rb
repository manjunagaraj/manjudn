class Document
	def initialize
	end
	def print
		raise NotImplementedError, "print method"
	end
end
class HtmlDocument
	def print
		puts"Html document"
	end
end
class XmlDocument
	def print
		puts"XML document"
	end
end
c=HtmlDocument.new
c.print
c=XmlDocument.new
c.print