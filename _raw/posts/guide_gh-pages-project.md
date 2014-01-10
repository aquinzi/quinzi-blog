.. title: GitHub Pages for projects
.. date: 2014-01-01
.. updated: 2014-01-02
.. tags: git, github
.. category: guide
.. slug: gh-pages-project
.. lang: en

[TOC]

Simple steps to create [GitHub Pages](http://pages.github.com/) for projects/per repo (not user nor organization) plus some other stuff.

The steps are for CLI and for GitHub for Windows (TortoiseGit is "similar" to Git CLI) and Git beginners oriented, who search for easiness and not so much fuss. However, if you're confortable using SVN, you can use it ([see clients in GitHub](https://help.github.com/articles/support-for-subversion-clients)).

Abbreviations and vocabulary:

<dl>
<dt><dfn>git CLI</dfn></dt>
<dd>Git used in a terminal/command line.</dd>

<dt><dfn>GW</dfn></dt>
<dd><a href="http://windows.github.com/">GitHub for Windows</a>.</dd>

<dt><dfn>Tortoise</dfn></dt>
<dd>TortoiseGit.</dd>

<dt><dfn>Server</dfn></dt>
<dd>Where things are "hosted" (like GitHub). This doesn't exist in Git, but this is how beginners can understand better (remote repository).</dd>
<dd>"Central server" if you're comming from SVN. </dd>

<dt><dfn>repo</dfn></dt>
<dd>To make things easier, take "repo" like "principal or remote repository" or "server" (see definition).</dd>

<dt><dfn>origin</dfn></dt>
<dd>This is how you name the original "remote repository" and by convention the 'primary' cetralized repository.</dd>

<dt><dfn>c-p</dfn></dt>
<dd><code>commit</code> followed by <code>push</code></dd>
</dl>


Programs for Windows
-----------------------

In the beginning, having Git in Windows was hard (because it was created by and for Linux) but now there are many options. Usually, if you are only going to use GitHub, GW is recommended. However, if you want to use Git for other things (like creating "servers" locally to play or test) I recommend [TortoiseGit](http://tortoisegit.org/) + [msysgit](http://msysgit.github.io/) (git CLI) instead:

1. you can use it for other things and not only for GitHub ("reads" the ``github://`` protocol)
2. you don't have to mess around with the PATH if you want to use git CLI (it installs in ``%appdata%`` and you can't only include ``bin\``)
3. msysgit comes with "git Bash"; a cool CLI with colors that shows in which ``branch`` you're in; what is more, you can customize it with ``.bashrc``.

![showing customized git Bash](/images/2014/git_bash.png)


Create repository
-----------------

In GitHub, create a repository with the desired name. You can log in and go to <https://github.com/repositories/new> o clicking in the "<kbd>book</kbd>".


"Activate" GitHub Pages
----------------------

It automatically activates when you create a ``branch`` called ``gh-pages``.

From web click in <kbd>branch master</kbd>; in GW click in <kbd>master</kbd> at the top. Search for <kbd>gh-pages</kbd> and press <kbd>create branch</kbd>. With CLI would be (previously cloned, look below):

	$ git checkout --orphan gh-pages    # branch local


!!! info
	``--orphan`` creates a ``branch`` separated from the rest of the repo (without *parents*). First, the ``branch`` is created locally and then sent to ``origin`` (steps below).


Get it in desktop (to work with it)
-----------------------------------

From GitHub click in <kbd>Clone in desktop</kbd> (that GW or Tortoise will recieve) or from CLI:

	$ git clone https://github.com/user/nice_repo.git


Prepare gh-pages branch
-------------------------

Switch to ``gh-pages``. In CLI, if you used the above command (``git checkout --orphan gh-pages``) it switches automatically, otherwise ``git checkout -b gh-pages`` to switch and create a local ``branch`` called "gh-pages".


!!! info
	When switching *branches*, Windows Explorer "refreshes" the folder with the content of the selected ``branch``.

Delete all the files (because they're from ``master`` and we don't want them) and we c-p.

	$ git rm -rf .                      # delete everything
	$ git commit -m "Initiating gh-pages"
	$ git push -u origin gh-pages       # send branch to origin


gh-pages as default and delete master
-----------------------------------------

This is optional, depends on your *workflow* or usage idea. If you're only going to use ``gh-pages``, you can use it as default and delete the ``master branch``.

To make it default (and not use ``master``), in GitHub, go to <kbd>settings \> (settings \>) Default branch</kbd> and select <kbd>gh-pages</kbd>.

To delete ``master`` you must have ``gh-pages`` as default. Then, go to the *branches* listing and click in <kbd>Delete branch</kbd>. With CLI:

	$ git branch -d master     # delete local
	$ git push origin :master  # delete from repo


It's alive! (Testing file and upload)
-----------------------------------------

Create an ``index.html``, add it and c-p.

	$ git add .                   # adds all
	$ git commit -am "First commit to pages"
	$ git push origin gh-pages

(``-a`` is an abbreviation of ``add``)

Wait a couple of minutes and check if ``index`` is uploaded in: <kbd>http://user.github.io/projectName/</kbd>


Custom domain
---------------

As you probably don't want to enter to <kbd>http://user.github.io/projectName/</kbd> because is too long or it's kind of unprofessional, GitHub allows you to assign a custom domain/subdomain to it.

You only need to create a ``CNAME`` file which has the domain/subdomain that you want to use, in the root of ``gh-pages`` and change the DNS in host/registrar:

* With a root domain (www.example.com): create a new ``A record`` with the IP to <kbd>204.232.175.78</kbd>.

* With a subdomain (sub.example.com): create a ``CNAME record`` that points to GitHub user subdomain (<kbd>user.github.io</kbd>). This allows the DNS to adjust automatically to GitHub's IP; you can use a ``A record`` but it won't update automatically.


404 pages! (Everyone loves error pages)
-----------------------------------------

It's easy too: create a ``404.html`` in ``gh-pages``'s root and done (don't forget to add and c-p).


<section id="changes">

<h2>Changes</h2>

<ol>
<li><time>2014-01-02</time> Rewritten to be more explanatory.</li>
</ol>

</section>