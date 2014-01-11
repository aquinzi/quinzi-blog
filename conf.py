# -*- coding: utf-8 -*-

from __future__ import unicode_literals
import time
from nikola import filters

# ---------------
# Configuration
# ---------------

BLOG_AUTHOR = "A.Q."
BLOG_TITLE = "A-Qute blog"
SITE_URL = "http://blog.quinzi.com.ar/"
BLOG_DESCRIPTION = "Blog for A.Q."
DATE_FORMAT = '%Y-%m-%d'
THEME = "simple-jinja"
# relative to the location of conf.py
OUTPUT_FOLDER = '_output'
DEFAULT_LANG = "en"
# Locales for building in windows. If in linux, doesn't exactly matter
LOCALES = {'en' : 'English_United States', 'es' : 'Spanish_Argentina'}
DEPLOY_DRAFTS = False
SOCIAL_BUTTONS_CODE = None
# Source for posts:
HIDE_SOURCELINK = True
COPY_SOURCES = False

# A HTML fragment describing the license, for the sidebar.
LICENSE = ""
# I recommend using the Creative Commons' wizard:
# http://creativecommons.org/choose/
# LICENSE = """
# <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/2.5/ar/">
# <img alt="Creative Commons License BY-NC-SA"
# style="border-width:0; margin-bottom:12px;"
# src="http://i.creativecommons.org/l/by-nc-sa/2.5/ar/88x31.png"></a>"""

# A small copyright notice for the page footer (in HTML).
CONTENT_FOOTER = '''
    <div id="vcard" class="vcard author p-author h-card vcard">
        <p>Hi, <i class="icon-user"></i> <span class="fn nickname p-name p-nickname" itemprop="name"> {author} </span> over here. Sadly, you reached the end of the page. Why don't you go back to top and forget you came here? I won't say anything.<span><a href="#top"><i class="fa fa-chevron-circle-up"></i></a></span>
        </p>
    </div>
'''

#CONTENT_FOOTER = 'Contents &copy; {date}         <a href="mailto:{email}">{author}</a> - Powered by         <a href="http://getnikola.com" rel="nofollow">Nikola</a>         {license}'
CONTENT_FOOTER = CONTENT_FOOTER.format(author=BLOG_AUTHOR)

# Post's dates are considered in UTC by default
#TIMEZONE = 'America/Argentina/Ushuaia'

# the path is a prefix for generated pages location
TRANSLATIONS = {DEFAULT_LANG: "", "es": "./es", }

# Links for the sidebar / navigation
NAVIGATION_LINKS = {
    DEFAULT_LANG: (
        ('/index.html', 'Index', 'archives'),
        ('/rss.xml', 'RSS', 'feed'),
        #('/categories/index.html', 'Tags', 'tags'),
        #( #sub menu BAZ contiene FOO y BAR. But not working in jinja
        #(  ('/foo', 'FOO'), ('/bar', 'BAR')  ), 'BAZ', 'icon-X'),
    ),
    'es': (
        ('/es/index.html', 'Index', 'archives'),
        ('/es/rss.xml', 'RSS', 'feed'),
        #('/es/categories/index.html', 'Tags', 'tags'),
    )
}

# Also get gist, nikola & podcast because those are
# done in the code, hope you don't mind ;-)
MARKDOWN_EXTENSIONS = ['codehilite(guess_lang=False)','extra', 'admonition', 'headerid', 'toc',
     'grid_tables']

# Folders to be copied as-is into the output. The format is a dictionary 
# of "source" "relative destination". 
FILES_FOLDERS = {
    '_raw/files': '', # Which means copy 'files' contents into 'output'
    '_raw/images' : 'images'
    }

# Comments, choose: "disqus", "livefyre", "intensedebate", "moot",
#                 "googleplus", "facebook", "isso"
COMMENT_SYSTEM = "disqus"
COMMENT_SYSTEM_ID = "quinziblog"

# Enable annotations using annotateit.org?
# ANNOTATIONS = False

# Plugins you don't want to use. Be careful :-)
DISABLED_PLUGINS = [
"render_archive"
#"render_archive_custom"
]

# POSTS and PAGES contains (wildcard, destination, template) tuples.
#
# Fragment/wildcard could have optionally translated files: 
# whatever/thing.txt.es and whatever/thing.meta.es
#
# From those files, a set of HTML fragment files will be generated:
# cache/whatever/thing.html, cache/whatever/thing.html.es
#
# These files are combinated with the template to produce rendered
# pages, placed at: output / TRANSLATIONS[lang] / destination / slug.html

POSTS = (
    #("posts/*.md", "posts", "post.tmpl"),
    ("_raw\\posts/*.md",  "", "post.tmpl"),
    ("_raw\\posts/*.txt", "", "post.tmpl"),
)
PAGES = (
    #("stories/*.md", "stories", "story.tmpl"),
    ("_raw\\pages/*.md",  "", "story.tmpl"),
    ("_raw\\pages/*.txt", "", "story.tmpl"),
)

# Let's fake "blog" index (so I don't have to do it) and use archive as index
# Final location: output / TRANSLATION[lang] / INDEX_PATH / index-*.html
INDEX_PATH = "indexes"

# number of Post per Index Page
INDEX_DISPLAY_POST_COUNT = 10

# Final locations for the archives are:
# output / TRANSLATION[lang] / ARCHIVE_PATH / ARCHIVE_FILENAME
# output / TRANSLATION[lang] / ARCHIVE_PATH / YEAR / index.html
# output / TRANSLATION[lang] / ARCHIVE_PATH / YEAR / MONTH / index.html
ARCHIVE_PATH = ""
ARCHIVE_FILENAME = "index.html"

# Commands to execute to deploy. Ex., you may use rsync:
# "rsync -rav --delete output/ joe@my.site:/srv/www/site"
# And then do a backup, or run `nikola ping` from the `ping`
# plugin (`nikola install_plugin ping`).
# To do manual deployment, set it to []
DEPLOY_COMMANDS = [
"rsync -rav --delete --exclude=.git --exclude='Thumbs.db' _output/ ../ghpages",
"cd ..\ghpages",
"git add .",
"git commit -am 'Publication on {date}'".format(date=time.strftime("%Y-%m-%d", time.localtime())),
"git push origin gh-pages",
]

# Put in global_context things you want available on all your templates.
# It can be anything, data, functions, modules, etc.
GLOBAL_CONTEXT = {
    'index_posts_list' : True,
    'default_lang' : DEFAULT_LANG,
    'fake_index' : True,    
}

# Use content distribution networks for jquery and twitter-bootstrap css and js
# If this is True, jquery is served from the Google CDN and twitter-bootstrap
# is served from the NetDNA CDN
USE_CDN = True

# Extra things you want in the pages HEAD tag. This will be added right
# before </HEAD>
# EXTRA_HEAD_DATA = ""
# Added to the bottom of <body>
# in the default template (base.tmpl).
BODY_END = """
<script src="/assets/analytics.js" type="text/javascript"></script>
<script src="/assets/github-mod.js" type="text/javascript"></script>
"""

# A mapping of languages to file-extensions that represent that language.
# 'html' assumes the file is html and just copies it
COMPILERS = {
    "markdown": ('.md', '.mdown', '.markdown'),
    "html": ('.html', '.htm'),
    # Pandoc detects the input from the source filename
    "pandoc2": ('.txt'),
}

# If True, publish future dated posts right away instead of scheduling them.
# Defaults to False.
# FUTURE_IS_NOW = False

# If True, future dated posts are allowed in deployed output
# Only the individual posts are published/deployed; not in indexes/sitemap
# Generally, you want FUTURE_IS_NOW and DEPLOY_FUTURE to be the same value.
# DEPLOY_FUTURE = False

# Allows scheduling of posts using the rule specified here (new_post -s)
# Specify an iCal Recurrence Rule: http://www.kanzaki.com/docs/ical/rrule.html
# SCHEDULE_RULE = ''
# If True, use the scheduling rule to all posts by default
# SCHEDULE_ALL = False
# If True, schedules post to today if possible, even if scheduled hour is over
# SCHEDULE_FORCE_TODAY = False

# While nikola can select a sensible locale for each language,
# sometimes explicit control can come handy.
# In this file we express locales in the string form that
# python's locales will accept in your OS, by example
# "en_US.utf8" in unix-like OS, "English_United States" in Windows.
# LOCALES = dict mapping language --> explicit locale for the languages
# in TRANSLATIONS. You can ommit one or more keys.
# LOCALE_FALLBACK = locale to use when an explicit locale is unavailable
# LOCALE_DEFAULT = locale to use for languages not mentioned in LOCALES; if
# not set the default Nikola mapping is used.

# Metadata. True = one file format. False = two-file (separate metadata)
ONE_FILE_POSTS = True

# HIDE_UNTRANSLATED_POSTS: 
# True: posts not translated to a LANG will not be visible in the pages in that language.
# False: the DEFAULT_LANG version will be displayed for untranslated posts.
HIDE_UNTRANSLATED_POSTS = False

# Paths for different autogenerated bits. These are combined with the
# translation paths.

# Final locations are:
# output / TRANSLATION[lang] / TAG_PATH / index.html (list of tags)
# output / TRANSLATION[lang] / TAG_PATH / tag.html (list of posts for a tag)
# output / TRANSLATION[lang] / TAG_PATH / tag.xml (RSS feed for a tag)
TAG_PATH = "tags"

# If TAG_PAGES_ARE_INDEXES is set to True, each tag's page will contain
# the posts themselves. If set to False, it will be just a list of links.
# TAG_PAGES_ARE_INDEXES = True

# Slug the Tag URL easier for users to type, special characters are
# often removed or replaced as well.
SLUG_TAG_PATH = True

# Create per-month archives instead of per-year
CREATE_MONTHLY_ARCHIVE = False
# Create one large archive instead of per-year
CREATE_SINGLE_ARCHIVE = True

# Final locations: output / TRANSLATION[lang] / RSS_PATH / rss.xml
RSS_PATH = ""

# Number of posts in RSS feeds
FEED_LENGTH = 10

# RSS_LINK is a HTML fragment to link the RSS/Atom feeds. If set to None,
# the base.tmpl will use the feed Nikola generates. However, you may want to
# change it for a feedburner or something else.
RSS_LINK = None

# Show only teasers in the RSS feed? Default to True
# RSS_TEASERS = True

# URLs to other posts/pages can take 3 forms:
# rel_path: a relative URL to the current page/post (default)
# full_path: a URL with the full path from the root
# absolute: a complete URL (that includes the SITE_URL)
URL_TYPE = 'rel_path'

# A list of redirection tuples, [("foo/from.html", "/bar/to.html")].
#
# A HTML file will be created in output/foo/from.html that redirects
# to the "/bar/to.html" URL. notice that the "from" side MUST be a
# relative URL.
#
# REDIRECTIONS = []

# The <hN> tags in HTML generated by certain compilers (reST/Markdown)
# will be demoted by that much (1 → h1 will become h2 and so on)
# This was a hidden feature of the Markdown and reST compilers in the
# past.  Useful especially if your post titles are in <h1> tags too, for
# example. (defaults to 1.)
DEMOTE_HEADERS = 0 # I know that post titles are in h1 u_u

# relative to the location of conf.py
CACHE_FOLDER = 'cache'

# Filters to apply to the output.
# A directory where the keys are either: a file extensions, or
# a tuple of file extensions.
#
# And the value is a list of commands to be applied in order.
#
# Each command must be either:
#
# A string containing a '%s' which will
# be replaced with a filename. The command *must* produce output
# in place.
#
# Or:
#
# A python callable, which will be called with the filename as
# argument.
#
# By default, there are no filters.
#
# Many filters are shipped with Nikola.  A list is available in the manual:
# <http://getnikola.com/handbook.html#post-processing-filters>
# FILTERS = {
#    ".jpg": ["jpegoptim --strip-all -m75 -v %s"],
# }

# ########################
# Image Gallery Options
# #########################

# Galleries are folders in galleries/
# Final location of galleries will be output / GALLERY_PATH / gallery_name
# GALLERY_PATH = "galleries"
# THUMBNAIL_SIZE = 180
# MAX_IMAGE_SIZE = 1280
# USE_FILENAME_AS_TITLE = True
# EXTRA_IMAGE_EXTENSIONS = []
#
# If set to False, it will sort by filename instead. Defaults to True
# GALLERY_SORT_BY_DATE = True

# #############################################################################
# HTML fragments and diverse things that are used by the templates
# #############################################################################

# Data about post-per-page indexes
INDEXES_TITLE = ""  # If empty, the default is BLOG_TITLE
INDEXES_PAGES = ""  # If empty, the default is 'old posts page %d' translated

# Color scheme to be used for code blocks. If your theme provides
# "assets/css/code.css" this is ignored.
# Can be any of autumn borland bw colorful default emacs friendly fruity manni
# monokai murphy native pastie perldoc rrt tango trac vim vs
CODE_COLOR_SCHEME = 'monokai'

# FAVICONS contains (name, file, size) tuples.
# Used for create favicon link like this:
# <link rel="name" href="file" sizes="size"/>
# For creating favicons, take a look at:
# http://www.netmagazine.com/features/create-perfect-favicon
FAVICONS = {
    ("icon", "/favicon.ico", "16x16"),
    ("icon", "/favicon.png", "16x16"),
    #("icon", "/icon_128x128.png", "128x128"),
}

# Show only teasers in the index pages? Defaults to False.
INDEX_TEASERS = False

# A HTML fragment with the Read more... link.
# The following tags exist and are replaced for you:
# {link}        A link to the full post page.
# {read_more}   The string “Read more” in the current language.
# {{            A literal { (U+007B LEFT CURLY BRACKET)
# }}            A literal } (U+007D RIGHT CURLY BRACKET)
# READ_MORE_LINK = '<p class="more"><a href="{link}">{read_more}…</a></p>'

# Create index.html for story folders?
STORY_INDEX = True
# Enable comments on story pages?
# COMMENTS_IN_STORIES = False
# Enable comments on picture gallery pages?
# COMMENTS_IN_GALLERIES = False

# What file should be used for directory indexes?
INDEX_FILE = "index.html"

# If a link ends in /index.html,  drop the index.html part.
# http://mysite/foo/bar/index.html => http://mysite/foo/bar/
# (Uses the INDEX_FILE setting, so if that is, say, default.html,
# it will instead /foo/default.html => /foo)
# Default = False
STRIP_INDEXES = True

# Instead of putting files in <slug>.html, put them in
# <slug>/index.html. Also enables STRIP_INDEXES
# This can be disabled on a per-page/post basis by adding
#    .. pretty_url: False
# to the metadata
PRETTY_URLS = True

# Should the sitemap list directories which only include other directories
# and no files.
# Default to True
# If this is False
# e.g. /2012 includes only /01, /02, /03, /04, ...: don't add it to the sitemap
# if /2012 includes any files (including index.html)... add it to the sitemap
# SITEMAP_INCLUDE_FILELESS_DIRS = True

# A search form to search this site, for the sidebar. You can use a google
# custom search (http://www.google.com/cse/)
# Or a duckduckgo search: https://duckduckgo.com/search_box.html
# Default is no search form.
# SEARCH_FORM = ""
#
SEARCH_FORM = """
<!-- Custom search -->
<form method="get" action="http://duckduckgo.com/"
 class="navbar-form">
<input type="hidden" name="sites" value="%s"/>
<input type="hidden" name="k8" value="#444444"/>
<input type="hidden" name="k9" value="#D51920"/>
<input type="hidden" name="kt" value="h"/>
<input type="text" name="q" maxlength="255"
 placeholder="Search&hellip;" class="span2" style="margin-top: 4px;"/>
<input type="submit" value="Search"/>
</form>
<!-- End of custom search -->
""" % SITE_URL

# Additional metadata that is added to a post when creating a new_post
# ADDITIONAL_METADATA = {}

# If webassets is installed, bundle JS and CSS to make site loading faster
USE_BUNDLES = False

# Add the absolute paths to directories containing plugins to use them.
# For example, the `plugins` directory of your clone of the Nikola plugins
# repository.
# EXTRA_PLUGINS_DIRS = []

# Experimental plugins - use at your own risk.
# They probably need some manual adjustments - please see their respective
# readme.
# ENABLED_EXTRAS = [
#     'planetoid',
#     'ipynb',
#     'local_search',
#     'render_mustache',
# ]

# List of regular expressions, links matching them will always be considered
# valid by "nikola check -l"
# LINK_CHECK_WHITELIST = []

# You can configure the logging handlers installed as plugins or change the
# log level of the default stdout handler.
LOGGING_HANDLERS = {
    'stderr': {'loglevel': 'WARNING', 'bubble': True},
    #'smtp': {
    #    'from_addr': 'test-errors@example.com',
    #    'recipients': ('test@example.com'),
    #    'credentials':('testusername', 'password'),
    #    'server_addr': ('127.0.0.1', 25),
    #    'secure': (),
    #    'level': 'DEBUG',
    #    'bubble': True
    #}
}
