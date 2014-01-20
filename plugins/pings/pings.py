from nikola.plugin_categories import Command
import sys

class Pings(Command):
	name = "pings"
	doc_purpose = "Send pingbacks and webmentions"
	
	cmd_options = [
		{
			"name": "check",
			"short": "c",
			"long": "check",
			"type": bool,
			"default": False,
			"help": "Check list of links",
		},
		{
			"name": "exclude-domains",
			"short": "e",
			"long": "exclude-domains",
			"type": str,
			"default": [],
			"help": "Exclude domains in list. domain,domain,domain...",
		},
		{
			"name": "exclude-links",
			"short": "l",
			"long": "exclude-links",
			"type": str,
			"default": '',
			"help": "Exclude links shown. number,number,number...",
		},
		
	]

	
	def _execute(self, options, args):
		"""Send pingbacks and webmentions from latest post """
		
		sys.path.append(self.site.config['SCRIPT_FOLDER'])
		import send_pings
		
		
		self.site.scan_posts()		
		#prob. there's another better way
		#only getting default lang
		post_link = self.site.timeline[0].permalink(absolute=True)
		post_text = self.site.timeline[0].text()		
		exclude_domains = None
		exclude_links = None		
		
		if options['exclude-domains']:
			exclude_domains = options['exclude-domains'].split(",")
		
		if options['exclude-links']:
			exclude_links = options['exclude-links'].split(",")


		links_html = send_pings.findLinksBody(post_text)
		
		if exclude_domains:
			links_html = send_pings.filterLinks(links_html, exclude_domains)
		
		if exclude_links:
			links_html = send_pings.removeLinksById(links_html, exclude_links, number_start_show = 1)
			
		if options['check']:
			print (" Links to ping")
			
			for number, link in enumerate(links_html):
				if (number + 1) <= 9: #prettify
					print (" {0} {1}".format(number+1, link))
				else:
					print ("{0} {1}".format(number+1, link))
					
		#send webmentions and pingbacks
		result = send_pings.pingAll(post_link, links_html)
