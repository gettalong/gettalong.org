require 'webgen/path_handler/feed'

class Webgen::PathHandler::Feed::Node
	def entry_content(entry)
		entry.render_block('teaser', Webgen::Context.new(tree.website, :chain => [entry])).content +
			entry.render_block('content', Webgen::Context.new(tree.website, :chain => [entry])).content
	end
end
