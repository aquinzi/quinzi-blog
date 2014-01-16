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
						if not 'webmention_io' in data_mentions:
							data_mentions['webmention_io'] = {}
						if not 'tweets' in data_mentions:
							data_mentions['tweets'] = {}
							
					
					
					# sort by date, Newest first. 
					
					# Take advantage of twitter with saving old first. 
					# Just reversing
					#sorted(data_mentions['tweets'], reverse=True)				

					post.mentions = data_mentions
