.. title: svnlog: make changelog from SVN
.. date: 2013-12-02
.. updated: 2016-02-09
.. category: release
.. tags: python, code, svn
.. slug: svnlog
.. lang: en

[svnlog][] is a python script to create a changelog from a repository log.

Examples of output (default):

	2013-11-25:
		changed arguments (better handling)
		fix: output path with one file
		fix: finding <h1>

	2013-11-19:
		fixed: now files are saved according to source dir tree
		+ option to save files in one depth dir

	2013-11-19:
		+ relative links for book

You can group that too:

	2013-11-25:
		changed arguments (better handling)
		fix: output path with one file
		fix: finding <h1>

	2013-11-19:
		fixed: now files are saved according to source dir tree
		+ option to save files in one depth dir
		+ relative links for book

It has some basic options:

* Show author with ```--show-author``` or ```-a```
* Show revision number with ```--show-rev``` or ```-r```
* Show time with ```--show-time``` or ```-t```
* Prefix with a char using ```--prefix```
* Reverse the order (default: new to old) with ```--reverse```
* Specify date or a range ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)) with ```--date```. You can leave the second date empy (```date1:```) to include today
* If you are better with revision numbers, you can specify one or a range with ```--revision```. You can leave the second revision empty (```rev1:```) to include HEAD revision
* Group the dates with ```--group```
* Also group revisions with ```--subgroup```
* Or group dates but show it inline: ```--inline```

Just make sure you have a SVN CLI in your path and then run [svnlog][] with the options you desire

[svnlog]: http://aquinzi.com/projects/svnlog.php