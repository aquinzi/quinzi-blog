from nikola.plugin_categories import Command
import sys

class ParseMentions(Command):
	name = "get_mentions"
	doc_purpose = "Get mentions from twitter and webmention"
	
	cmd_options = [
		{
			"name": "twitter",
			"short": "t",
			"long": "twitter",
			"type": bool,
			"default": False,
			"help": "check twitter mentions of URL",
		},
		{
			"name": "webmentions",
			"short": "w",
			"long": "webmentions",
			"type": bool,
			"default": False,
			"help": "Check webmentions",
		}
	]

	
	def _execute(self,options, args):
		"""Get mentions from Twitter and webmentions"""

		sys.path.append(self.site.config['SCRIPT_FOLDER'])
		import webmentions
		
		test = webmentions.Mentions(self.site.config["SITE_URL"], self.site.config['MENTIONS_PATH'])
		
		if not options['twitter'] and not options['webmentions']:
			#if none, check twitter only, default behaviour
			test.twitterMentions(webmentions.MY_TWITTER_CONFIG)
			
		if options['twitter']:
			test.twitterMentions(webmentions.MY_TWITTER_CONFIG)
			
		if options['webmentions']:
			#must find all slugs/urls and cycle through them
			import nikola.post
			self.site.scan_posts()
			
			for lang in self.site.config['TRANSLATIONS']:
				for post in self.site.timeline:
					if not lang == self.site.config['DEFAULT_LANG']:
						this_slug = lang + "/" + post.meta[lang]['slug']
					else:
						this_slug = post.meta[lang]['slug']
					
					this_slug += "/"
		
					test.webmention_heroku(self.site.config['MENTIONS_SERVER'], this_slug)
