import nikola.post
from nikola.plugin_categories import Task

import yaml, os


class ParseMentions(Task):
	name = "parse_mentions"
	
	def gen_tasks(self):
		self.site.scan_posts()
		
		kw = {
			"timeline": self.site.timeline,
			"translations": self.site.config["TRANSLATIONS"],
			}
		
		
		yield self.group_task()
	
		#load yaml to obj var in post.
		for lang in kw["translations"]:
			for post in kw['timeline']:
				path_file = os.path.join(
						self.site.config['MENTIONS_PATH'],  
						'%s.yaml' % post.meta[lang]['slug']
						)
						
				if os.path.exists(path_file) and os.path.isfile(path_file):		
					with open (path_file, 'r') as yaml_file:
						data_mentions = yaml.load(yaml_file)
					if not 'webmention' in data_mentions:
						data_mentions['webmention'] = {}
					if not 'tweets' in data_mentions:
						data_mentions['tweets'] = {}
							
					# sort by date, Newest first. 
					# Take advantage of twitter with saving old first. 
					# Just reversing
					#sorted(data_mentions['tweets'], reverse=True)	
					
					# merge all twits from author in one, using lasted url 
					# and count all favs + Retweets. And remove from tweet list 
					twitter_author = self.site.config['TWITTER_USER']

					data_mentions['tweet_author'] = {}
					favorite_count = 0
					retweet_count  = 0
					tweet_id       = ""

					for tweet, prop in list(data_mentions['tweets'].items()):
						if prop['user_screen_name'] == twitter_author:
							favorite_count += prop['favorite_count'] 
							retweet_count  += prop['retweet_count']
							tweet_id = prop['id']

							del data_mentions['tweets'][tweet]

					data_mentions['tweet_author']['favorite_count'] = favorite_count
					data_mentions['tweet_author']['retweet_count'] = retweet_count
					data_mentions['tweet_author']['id'] = tweet_id

					post.mentions = data_mentions
