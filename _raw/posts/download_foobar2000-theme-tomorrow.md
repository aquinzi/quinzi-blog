.. title: foobar2000 theme: Tomorrow Night Bright
.. date: 2013-11-07
.. category: download
.. tags: foobar2000, theme
.. lang: en
.. slug: foobar2000-theme-tomorrow-night

[TOC]

Playing with foobar2000's Default UI, I made this minimalistic/simple theme with [Tomorrow theme](https://github.com/ChrisKempson/Tomorrow-Theme) colors (Night Bright version).


## Screenshots

You've got the menu + playback controls in the same line. Underneath, seekbar + playlist dropdown. In the status bar is the time, rating (view) and volume.

There four views/tabs in total:

"Now" has the active playlist, grouped by artist (in blue) + album (green). Tracks only show their title (red) and comment (orange).

![Active playlist](/images/2013/foobar_tomorrow_now.png)

"Lyrics" has the cover art and the lyrics.

![Lyrics panel](/images/2013/foobar_tomorrow_lyrics.png)

"Meta" is the playing track details.

![Track properties](/images/2013/foobar_tomorrow_meta.png)

"Library" is self explanatory.

![Tree library](/images/2013/foobar_tomorrow_library.png)

There's no playlist list (only the dropdown) because I couldn't find one that prevents me from accidental deletion :P. If you want to manage them, go to <kbd>View > Playlist Manager</kbd>


## Requirements

- [foobar2000](http://www.foobar2000.org/)
- [EsPlaylist](http://foo2k.chottu.net/)
- [Lyric Show Panel 3](http://www.foobar2000.org/components/view/foo_uie_lyrics3)
- [theme + configuration](http://www.mediafire.com/?qb2v62gt01uzr8h)

Place the EsPlaylist configuration (```foo_uie_esplaylist.dll.cfg```) in ```[foobar_home]/configuration``` and the theme (```tomorrowbright.fth```) where you please.

Import the theme (<kbd>Preferences > Display > Default User Interface > Import theme</kbd>). In the playlist, <kbd>right click > grouping > inline - Tomorrow night bright</kbd>. In the lyrics panel, edit the preferences (<kbd>panel preferences</kbd>) and change the ``highlight color`` to RGB ``236,206,88`` (yellow).

The "headers" colors (in playlist, the ``%artist%``, ``%album%``; and in "meta", the "metadata", "location", "other"...) is configurated in <kbd>Default User Interface > Colors and fonts</kbd> (if you don't like violet).

If you want to change the control buttons, you must use 16x16 ``.ico`` files.

The Windows theme is [SlanXP2 for 7](http://www.deviantart.com/art/SlanXP-2-0-For-7-134955170), that's way the DUI looks better than defaults.