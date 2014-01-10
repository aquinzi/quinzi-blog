.. title: Android: solving battery drain
.. date: 2012-11-01
.. category: solved
.. tags: android, battery
.. slug: android-battery-drain
.. lang: en

[TOC] 

## Background

Some weeks ago I had these **battery drain** problem (again). Usually is
because I openend Google Maps and it's fixed by rebooting the phone; but
I remembered that I haven't. That puzzled me.

I rebooted, stopped some apps that I thought they were the culprit to no
avail. Everything happened after updating some apps, therefore, I froze,
uninstalled, deleted widgets, etc., no luck.

I let the phone alone so it could stabilize. Days passed by, and I still
had to charge the phone everyday (I charge the phone every other day
because of the light usage). 

From all the apps that I updated, there was one that had the "drains
battery" comment. I proceeded to uninstall it and change it to another
one (which is more than I need, uglier looking comparing to previous one
but funnier and lighter. A keeper but I'm going to miss the little cute
eyed pillow).

That app wasn't the problem.

The same comment though, said how the user found out that the app was
draining the battery. I wrote down and searched for this program. It
showed that I (the phone) had very bad **deep sleep**. The *deep sleep*
state is a very important one as it's when the little android robot guy
it's really sleeping and not doing something else (ex. updating
statuses, e-mail... and not the other thing you thought, you pervert).

Thank you, but the app only does that. It shows the time in the CPU
frequencies, nothing else... Until I found the solution.

## Tell me how to solve the problem already, goddamn!

What you need:

  - phone or tablet with battery drain problem
  - CPU Spy (possibly optional, BetterBatteryStats has that option)
  - BetterBatteryStats
  - more than 4hrs without using the phone but less than 10hrs for sure


### Procedure

-   Install CPU Spy and BetterBatteryStats. Remember to charge your
phone fully 'cause you need every single juice porcentage.
-   Write down/take a screenshot of your homescreen or a place where it
has the battery porcentage and the time.
-   Start CPU Spy and reset the timers.
-   Start BetterBatteryStats <kbd>menu \> more \> set custom ref</kbd>.
-   Leave the phone alone (it won't feel lonely, believe me) for at
least 4hrs (better overnight) with screen off.
-   Forget the phone and take fresh air; pet your pet, feed it, play
with it; excercise...


After X hours:

Write down/take a screenshot of your homescreen or a place where it has
the battery porcentage and the time. Find out how much the battery
dropped per hour: *[initial battery - now battery] / [hours phone
asleep]* = xxxx% -\> battery drop per hour. If it's around 1%, get the
hell out and enjoy your life, otherwise, continue.

Go to CPU Spy and take the phone's deep sleep time. If it's (around) the
same as the phone sleep time, everything is fine, otherwise continue.

Now go to BetterBatteryStats. In the second option/dropdown choose
<kbd>since custom ref.</kbd>. In the first option/dropdown choose <kbd>kernel wakelock</kbd>. If you have high usage of ``PowerManagerService``, which is a placeholder for all partial
wakelocks, you must choose (in the first option/dropdown) <kbd>Partial wakelocks</kbd>.

There you can see which app is costing you battery's juice. It can be
for many reasons, so I can't help you there. My problematic app was **SugarSync**. I killed (oh no! poor bird D: !) and started
again, no problem. Don't know what was causing the drain but now it
seems to work as before.

If you have many apps that show draining your battery,
freeze/uninstall one by one. Don't get crazy.

Sources/here you can read more:

-   [http://forum.xda-developers.com/showthread.php?t=1308030][]
-   [http://forum.xda-developers.com/showthread.php?t=1878828][]
-   [http://forum.xda-developers.com/showthread.php?t=1179809][]


[http://forum.xda-developers.com/showthread.php?t=1308030]: http://forum.xda-developers.com/showthread.php?t=1308030
[http://forum.xda-developers.com/showthread.php?t=1878828]: http://forum.xda-developers.com/showthread.php?t=1878828
[http://forum.xda-developers.com/showthread.php?t=1179809]: http://forum.xda-developers.com/showthread.php?t=1179809