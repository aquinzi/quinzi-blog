from nikola.plugin_categories import Command

import sys
sys.path.append(r'C:\Scripts')
import webmentions


class ParseMentions(Command):
	name = "get_mentions"
	doc_purpose = "Get mentions from twitter"
	
	def _execute(self,options, args):
		"""Get mentions"""
		
		test = webmentions.Mentions(self.site.config["SITE_URL"], self.site.config['MENTIONS_PATH'])
	
		test.twitterMentions(webmentions.MY_TWITTER_CONFIG)
