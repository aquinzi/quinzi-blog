.. title: Box: WebDAV access
.. date: 2013-08-04
.. tags: box, sync, windows7, webdav
.. category: guide
.. slug: box-webdav
.. lang: en

[TOC]

To access to syncing servicies via [WebDAV](http://en.wikipedia.org/wiki/WebDAV), and see them in a file manager without installing the client -> wait to load -> index -> do the sync dance just to get one file[^1], it's priceless[^priceless].

[^1]: The mayority of people use the servicies as file hosting
[^priceless]: literally. Nowadays, the operative systems have the feature built-in (more, less or not bugged)

I decided to do this because I wanted to do something that needed a FTP. Lately (or always was like that), you can't create a FTP account only, you must create a web site first. Not interested. I don't have a server/computer (proyect pending)  acting as a server and install [FileZilla](https://filezilla-project.org). Damnit. I remembered the sync servicies that I have an account with and jumped into using them.

*[FTP]: The "old" thingy

I chose [Box](http://www.box.com). I thought into uploading the files via the web interface, given that the synchronization is a bit bad, but I realized that [SugarSync](https://www.sugarsync.com/) has the "SugarSync Drive" feature, that allows you to access your file through a file manager. I started to search if Box had something similar.

It has FTP access but only for paid accounts. Then I read about WebDAV. Tried to configurate it and, after struggling for minutes, here is how to do it in Windows (7)

## Windows Explorer

In "Computer" (the old "My PC"), go to <kbd>Map network drive</kbd>

![Context menu](/images/2013/webdav_mapnetwork.png)

Select the drive (doesn't matter apparently), check <kbd>Reconnect at logon</kbd>. Click on <kbd>Connect to a Web site that you use to store...</kbd>

![Configuration window](/images/2013/webdav_mapnetwork_config.png)

In the new popup window, select <kbd>Choose a custom network location</kbd>

![Configuration window](/images/2013/webdav_mapnetwork_location.png)

Now the fun part that gave me headaches: the address.

![Configuration window](/images/2013/webdav_mapnetwork_address.png)

You can input:

* For the whole folder/account: ``https://dav.box.com``
* For specific folder: ``https://dav.box.com/dav/FOLDER``

New popup window for log in. Enter the Box user/e-mail and password.

Optional, in the next window rename the folder:

![Configuration window](/images/2013/webdav_mapnetwork_name.png)

And here is the hardwork done:

![Showing mapped drive](/images/2013/webdav_networks_computer.png)

If this doesn't work for you, you can use [CarotDAV](http://rei.to/carotdav_en.html) (to view al the servicies in one portable program), the famous [Total Commander](http://www.ghisler.com/download.htm) or BitKinex.

## BitKinex

[Download BitKinex](http://www.bitkinex.com/download). Install normally, but I recommend (because I read somewhere) uncheck the "I want to configure data source now" option (apparently does nothing)

Once initiated (yes, it looks very small for some reason), look for Http/WebDAV, <kbd>right click > New > Http/WebDAV</kbd> and enter a name.

![Creating service](/images/2013/webdav_bitkinex_new.png)

The address is similar to above: ``dav.box.com``, select <kbd>SSL</kbd>. Enter user and password:

*[SSL]: Security before all

![Configuration window](/images/2013/webdav_bitkinex_server.png)

I also read (optional) that you can include a path in the Site map (don't know why, didn't noticed a difference). You configurate it going to <kbd>Site Map</kbd> (under where you're now/Server) and adding/modifyng the path with ``/dav``, picking <kbd>Directory WebDAV-compliant</kbd>

![Configuration window](/images/2013/webdav_bitkinex_sitemap.png)

And done, you just doble click it to connect:

![Service added](/images/2013/webdav_bitkinex_connection.png)

Source: [Box zendesk](https://box.zendesk.com/entries/21534903)