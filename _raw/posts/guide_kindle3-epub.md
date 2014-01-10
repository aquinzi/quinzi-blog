.. title: Read ePUB in Kindle 3
.. date: 2011-12-30
.. category: guide
.. tags: kindle, epub
.. slug: kindle3-epub
.. lang: en

[TOC]

The other day I was looking if there was a possibility to read ePUBs in
Kindle, and if yes, how to. Just for fun.

## Jailbreak

First you have to jailbreak [downloading the file][].

Unzip it. Find ``update_*_install*.bin`` where \* is your kindle and
firmware version. And copy it to (your kindle's) root.

Eject Kindle and press <kbd>HOME > MENU > Settings > MENU > Update Your Kindle.</kbd>

## Launchpad

[Download this file][] and unzip it.

Copy ```update_launchpad_0.0.1c_*_install.bin``` where \* is your kindle and
firmware version. And copy it to (your kindle's) root.

Eject Kindle and press <kbd>HOME > MENU > Settings > MENU > Update Your Kindle.</kbd>

After this, there 2 readers that you can install: fbKindle and Cool
Reader. Each one has its pros and cons. In terms of "usabillity", one
(fbKindle) allows links and shows furigana as when a browser can't
interpret them (inline) but doesn't show tables propertly. However, I
think it's not developed anymore. The other one (Cool Reader) doesn't
allow links, furigana it's shown with line breaks, does show tables
propertly and it seems that it's still developed. Here I show how to
install Cool Reader (the other one is almost the same)


## Cool Reader 3

The formats read by the Cool Reader are fb2, txt, html, rtf, chm, epub, mobi. It was
created (and it's "main objective") for reading [fb2][], that's why ePUB
(and surely HTML and chm) are not read "propertly".

[Download the file]( http://www.mobileread.com/forums/showthread.php?t=148850) and unzip it.

Copy folders `cr3` and `qtKindle` to Kindle's root. Copy file from
`launchpad\cr3.ini` to the `launchpad` folder (root).

Eject Kindle. Quickly press (in home) <kbd>Shift Shift Space</kbd>, a "success!"
message it's shown on the bottom left corner. Press <kbd>Shift C R</kbd>, a
"success!" message appears and the program loads.

To open files, you must press <kbd>Menu</kbd> key or press <kbd>S</kbd>

Basic Hotkeys:

-   <kbd>Alt Back</kbd> - Exit program
-   <kbd>Alt Shift</kbd> - Collapse \\ deploy Cool Reader
-   In preferences dialogue: <kbd>Home</kbd> - saves options, <kbd>Back</kbd> - quit
without saving



[downloading the file]: http://www.mobileread.com/forums/showthread.php?t=88004
[Download this file]: http://www.mobileread.com/forums/showthread.php?t=97636
[fb2]: http://en.wikipedia.org/wiki/Fb2
