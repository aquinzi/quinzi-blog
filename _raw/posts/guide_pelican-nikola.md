.. title: Pelican to Nikola (and tutorial)
.. date: 2014-01-11
.. tags: pelican, nikola, static, python, windows
.. category: guide
.. slug: pelican-nikola
.. lang: en


[TOC]

When I was thinking of moving my blog to this new domain, I thought of using [Pandoc][] as the converter[^1]. I even created [pandy](http://quinzi.com.ar/projects/pandy) for that. But then I run into the "problems" (ok, I was kind of lazy) of generating RSS, listing posts with certain tags or categories (which I ended up not using), the index and archive, idealizing of using plugins, etc. and gave up. 

[Pandoc]: http://www.johnmacfarlane.net/pandoc/
[^1]: Because I hate opening an HTML block tag and the markdown inside is not parsed. I know, it's said in the [markdown](http://daringfireball.net/projects/markdown/) reference, but hey: **it's 2014** and I need that. But I still love the admonition implementation in [Python-Markdown](http://pythonhosted.org/Markdown/)

In the beginning, I would [continue using Pelican](link://slug/wordpress-to-pelican) as is [it's easy and customizable](http://docs.getpelican.com/), even though it doesn't have Pandoc[^2] support. But later I would be lazy to move to another system (not that I blog much, but **I like Pandoc's markdown**).

[Pelican]: http://docs.getpelican.com/
[^2]: Which [now I see](http://docs.getpelican.com/en/3.3.0/internals.html#how-to-implement-a-new-reader) it looks pretty easy to implement. Oh well.


Acrylamid
-----------

In my searching, I found [Acrylamid][] which looks pretty good. It's like the programmer/hacker blog generator, where you can do many things, including using template syntax *inside* your post. How cool is that?. It also has incremental builds, which means that it won't regenerate the whole site/blog again after a little edit, but only what it was changed. 

[Acrylamid]: http://posativ.org/acrylamid/index.html

Other cool things include:

  * different meta tags: you can choose between MultiMarkdown (like Pelican), YAML or rst.
  * the draft status is a boolean. Yay!.
  * you can [include template syntax inside your posts](http://posativ.org/acrylamid/advanced.html#jinja2-or-mako-in-entry) and you can even use the configuration variables!
  * automatic summary/intro
  * user custom acronyms and abbreviations in a text file.
  * [the views things](http://posativ.org/acrylamid/views.html) that looks cool that I couldn't understand first but then I got the hang of it (they are very customizable)
  * colored command line output. THANK YOU!
  * out of the box pingbacking to other blogs and twitter posting.
  * info about the blog: how many published, drafts, tag usage count. Also when was last compiled, cache size...
  * [execute shell commands in the post](http://posativ.org/acrylamid/advanced.html#using-the-system-s-shell): like listing a directory, include another file, etc.
  * serve the site with a command
  * post-processing filters

It doesn't have categories (but by using views [seems like it's posible](https://github.com/posativ/acrylamid/issues/121)), automatic galleries creation (but you can use template syntax inside the post, [so is covered](http://posativ.org/acrylamid/howtos.html#image-gallery)) and the [theme creation](http://posativ.org/acrylamid/theming.html) it's not so automatic: you must list all the files that the theme uses inside an ``__init.py`` file.

I really wanted to use Acrylamid, even without the missing bits, but it was kind of "complicated" to set up on Windows if you wanted to use [python-magic](https://github.com/ahupp/python-magic) (at least I have problems with it). I skipped that part but for some kind of reason I was getting errors with the locale setting. I tested it with "Linux locale" and "Windows locale" and both threw me errors.


Nikola
---------

Then I remembered I once stumbled upon [Nikola][], originally created by an Argentinian guy, so yeah, I had to try it out :P.

[Nikola]: http://getnikola.com/

It does have [Pandoc][] support; but it's not as "feature rich" (or easy customizable) as [Pelican][], and the documentation it's not so "complete" if you will. There are a couple of things that are not documented and you must find it in the Google Groups, GitHub or looking in the code. And also, not so feature-cool like [Acrylamid][]. However, I think it's on a good track and it's the newest of the three.

It has cool things too:

  * incremental builds (like Acryamid)
  * [automatic gallery creation](http://getnikola.com/handbook.html#image-galleries)
  * categories (like Pelican)
  * easy themable (like Pelican)
  * serve the site with a command and it has "Live" re-rendering 
  * [retired posts](http://getnikola.com/handbook.html#retired-posts) (so no 404 errors)
  * [redirections](http://getnikola.com/handbook.html#redirections) (in case you can't use ``.htaccess``)
  * [deploy commands](http://getnikola.com/handbook.html#deployment) (a bunch of commands to run, so you don't have to script it)
  * post-processing filters
  * internationalization support (the site/blog interface can be in many languages)
  * password protected posts/pages
  * ["Schedule"](http://getnikola.com/handbook.html#queuing-posts) posts/pages 
  * Wide range of (3rd party) comment systems and [AnnotateIt](http://annotateit.org) support.
  * [reStructuredText Extensions](http://getnikola.com/handbook.html#restructuredtext-extensions) (if you use that).
  * Support for Twitter cards
  * raw post/page support (to show the source in text)
  
The draft state is applied in the "tag" metadata instead of a separate one, and they are deployed by default; it has no color support for the command line (but I think it's in the talks) and the "show source of the post and copy it" it's enabled by default.


The moving
-----------


### Install Nikola

You start first by [getting Nikola](http://getnikola.com/) and installing it. By default, it uses [Mako](http://makotemplates.org) as the template engine, but it has support for [Jinja2](http://jinja.pocoo.org/). You can read about the [dependencies in the documentation page](http://getnikola.com/handbook.html#installing-nikola) and if you want, you can use ``pip install -r requirements.txt`` or ``requirements-full.txt`` for the whole thing.

If you are running Windows, you must download and install the compiled versions of lxml and pillow. You can check in their [PyPI pages](https://pypi.python.org/) or you can go to <http://www.lfd.uci.edu/~gohlke/pythonlibs/> and get them there. Remember to download and install according to your Python version and architecture (32 or 64 bits).


### Initiate

To initiate or create an empty site with the default settings and folder structures, run either ``nikola init path/to/mysite`` or, if you want some demo content, ``nikola init --demo path/to/mysite``.


### Convert metadata

Pelican uses the [Multimarkdown](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide) style of metadata while Nikola uses something similar: the same syntax but with ``..`` in front.

An example would be:

	Title: nice title! :D      # Pelican
	.. title: nice title! :D   # Nikola

You can do that by hand or [download my python script](https://gist.github.com/eikiu/8377090) to take care of that. It also moves "draft" status to Nikola's tag, and Pelican's summary to Nikola's description (activated by default). 

!!! note
	Nikola doesn't have/see the "modified" meta key internally, but you can have it like a custom key. You just access it differently in the themes.


### Translations

If you have posts or pages translations you must pay attention: Nikola handles the translations differently from Pelican. While in Pelican you only set the same slug or title in the posts, and have different file names (I think); Nikola relies on the file names.

The easiness of this depends on your setup, but you must end up with something like: ``nicefile.md`` for the post in default language, and ``nicefile.md.es`` (spanish content) for the translated file.

The cool thing of this is that you don't have to duplicate the meta tags. For example, you just create the "tags" meta key in the default language but don't specify it in the translated one. So when you update, you do only in the "master" or "parent" file and the "child" just copies it. 

If you don't feel like having duplicated metadata between files, and after you renamed and converted them, you can run [this python script](https://gist.github.com/eikiu/8377186) to delete them. Remember this is optional (or at least it didn't break my setup).


### Images paths

The syntax on this is also different but it can be easily done with search and replace. You can use whatever you want, like grep. If you are on Windows, I recommend [grepWin][] if you want something with a GUI. This changes from setup to setup, but my settings were:

For markdown syntax:

  * Search ``(|filename|../../images/`` 
  * Replace ``(/images/``

And for HTML:

  * Search ``<img src="../../static/images/`` 
  * Replace `` <img src="../images/``


[grepWin]: http://stefanstools.sourceforge.net/grepWin.html


### Links between posts

Again, this is totally different between the systems and it's going to be very easy or really difficult depending on your setup: Pelican uses the filenames for linking content while Nikola uses the slug of the post.

If you have the filename like the slug (or very similar) you can search and replace again. Like:

  * Search: ``\(\|filename\|(.+)\.md\)``
  * Replace: ``(link://slug/$1)``

I recommend doing it after the images, and you must check the links afterwards.


### Plugins syntax

I didn't use many plugins that used syntax in my posts, just only one: [interlinks](http://quinzi.com.ar/projects/interlinks). This was easilly done with search and replace.


Other Nikola stuff
---------------------

### Locale in Windows

If you are going to use the internationalization in Windows, you must configurate your ``LOCALES`` as (example):

	LOCALES = {'en' : 'English_United States', 'es' : 'Spanish_Argentina'}

It doesn't matter your Windows language setting, I think it only accepts english locales (I tested it with Windows in Spanish and it worked).


### Linking internally

If you want to link to another post, tag, archive, etc.:

  * gallery: ``link://gallery/gallery_name``
  * tags index: ``link://tag_index``
  * tag's page: ``link://tag/tagname``
  * tag's RSS feed: ``link://tag_rss/tagname``
  * blog's index page: ``link://index``
  * index [NUMBER] page: ``link://index/NUMBER``
  * per-year archive: ``link://archive/ ``
  * posts of [YEAR] ``link://archive/YEAR``
  * blog's feed: ``link://rss``
  * other post: ``link://slug/the-nice-slug``


### Pandoc

As Pandoc uses the extension to recognize the input, you must configurate that extension in the ``COMPILERS`` option in the configuration file. If it's not found, it uses Markdown as default.

While it worked for me using markdown, it didn't exactly work with some others, like Mediawiki. I don't know why.


### Posts folder and subfolders

[Nikola][] preserves the folder structure of the posts in the subfolders. If you have ``file_g.txt`` inside ``folder_abc``, that structure is kept in the output. It can be good if you want to use it as categories in the output. There is no way to configurate it in the configuration.

In [Pelican][] you can have many subfolders and sort of categorize your posts as you wish, and the output is configurated (by default, by date) as you want.



Testing
--------

Initially your posts go to a ``posts`` folder in your root and the pages in ``story``. The images folder would go to ``files``. You can configurate all of this in the configuration file.

After configurating your ``conf.py``, which is very well commented, you can try it. 

Build the site with ``nikola build``. Then you can drag and drop pages to a browser or use the serve command: ``nikola serve`` and pointing your browser to ``http://127.0.0.1:8000``