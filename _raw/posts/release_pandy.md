.. title: pandy
.. date: 2013-12-11
.. updated: 2016-02-09
.. category: release
.. tags: python, code, pandoc, markdown
.. slug: pandy
.. lang: en

[pandy](http://aquinzi.com/projects/pandy.php) is a command line wrapper for [pandoc](http://johnmacfarlane.net/pandoc/) + cool stuff (if you use markdown -> html)

Basically takes a file/folder, input the markup to convert from, the output markup and runs it through pandoc.

Usage
--------

To use the script, just call it with something like:

	pandy source format_from format/s_to [other options]

Features
----------

* A bit easier syntax around pandoc commands (I can't never remember them)
* Output folder keeping or not the folder structure
* Source can be a file, a folder or a .list containing file paths
* Formats: some of them have abbreviations (see below)
* Output format: you can have more than one! just separate them with spaces
* You can create a nice book (html, just adds navigation links between files). If you don't like/want "Next-Prev" navigation links, you can use the file's title. It creates a nice simple index file or you can include your own.
* Use a config file: so you don't have to remember all the arguments or write a "wrapper" script for a "wrapper" script :)
* ``[TOCME]`` support. That means that a file that has it, will have a TOC. No more separating files: these ones with TOC, these ones without, and finally place them in the same folder.
* If you use markdown and convert to HTML there are some goodies for you! abbreviations (real abbreviations, like that they are parsed and not ignored as pandoc does) and admonitions.
* "WikiLinks" for your custom index file!

For more information and explanation, go to [pandy project page](http://aquinzi.com/projects/pandy.php).