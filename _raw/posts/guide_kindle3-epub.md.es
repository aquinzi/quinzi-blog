.. title: Leer ePUB en Kindle 3
.. lang: es
.. updated: 2016-02-09

[TOC]

El otro día andaba buscando si era posible leer ePUBs en el Kindle y, si
era asi, cómo leerlos. Sólo por curiosidad.

## Jailbreak

Primero hacerle Jailbreak [bajando el archivo][].

Descomprimirlo. Buscar el ``update_*_install*.bin``, donde \* es
dependiendo del Kindle y firmware que tenga (en el post y dentro del
comprimido dice cómo) y pasarlo al root del kindle.

Liberar/eject el Kindle y apretar <kbd>HOME > MENU > Settings > MENU > Update Your Kindle.</kbd>

## Launchpad

[Descargar este archivo][] y descomprimirlo.

Pasar el ```update_launchpad_0.0.1c_*_install.bin``` (donde \* es la version
del Kindle que tengas) al root del kindle.

Liberar/eject el Kindle y apretar <kbd>HOME > MENU > Settings > MENU > Update Your Kindle.</kbd>

Después de esto, hay dos lectores que se les puede instalar: el fbKindle
y Cool Reader. Cada uno tiene sus pro y contras. De las de "usabilidad"
uno (fbKindle) acepta links y muestra el furigana como se tendria que
mostrar cuando un navegador no los puede interpretar (inline) pero no
muestra bien las tablas, ademas de que parece que no se desarrolla mas.
El otro (Cool Reader) no acepta links, el furigana los muestra con line
breaks, muestra bien las tablas y parece que todavia se desarolla. Aca
sólo "muestro" como se instala el Cool Reader. (el otro es casi lo
mismo)

## Cool Reader 3

Los formatos que Cool Reader 3 lee son: fb2, txt, html, rtf, chm, epub,
mobi. Se creó (y su "principal objetivo") para leer los [fb2][], por eso
los epub (y seguro HTML y chm) no los lee "tan bien".

[Descargar el archivo]( http://www.mobileread.com/forums/showthread.php?t=148850) y descomprimirlo.

Copiar las carpetas `cr3` y `qtKindle` en el root del kindle. Copiar el
archivo de `launchpad\cr3.ini` a la carpeta del root `launchpad`

Liberar/eject el Kindle. Rapidamente apretar (en el home)
<kbd>Shift Shift Espacio</kbd>, aparece un “success!” abajo a la izquierda, y
apretar <kbd>Shift C R</kbd>, aparece el “success!” y carga el programa.

Para abrir los archivos, se aprieta la tecla <kbd>Menu</kbd> o apretar <kbd>s</kbd>.

Hotkeys básicas:

-   <kbd>Alt Back</kbd> - Sale del programa
-   <kbd>Alt Shift</kbd> - Collapse \\ deploy Cool Reader
-   En el dialogo de preferencias: <kbd>Home</kbd> - guarda las opciones,
<kbd>Back</kbd> - sale sin guardar



[bajando el archivo]: http://www.mobileread.com/forums/showthread.php?t=88004
[Descargar este archivo]: http://www.mobileread.com/forums/showthread.php?t=97636
[fb2]: http://en.wikipedia.org/wiki/Fb2

<h3> Comments </h3>

<div id="comments">

<ol class="commentlist">
<li class="comment even thread-even depth-1" id="li-comment-227">
<div id="comment-227">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/ebf1bd99e7fead4d2f84608a397de7f5?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />			<cite class="fn"><a href='http://hookdump.com.ar' rel='external nofollow' class='url'>hookdump</a></cite> <span class="says">says:</span>		</div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
February 9, 2012 at 1:02 pm	</div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>o.O Esto funca?<br />
Usualmente soy un freak que jailbreakea/upgradea firmware en todos los dispositivos, desde el iPhone hasta la licuadora(?). </p>
<p>PERO&#8230; El kindle&#8230; el kindle para mi es sagrado. </p>
<p>Así que pregunto: ¿Esto es inocente e inocuo?, ¿no podría destruir mi kindle por toda la eternidad?, ¿probaste hacer esto?</p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="comment byuser comment-author-eikiu bypostauthor odd alt thread-odd thread-alt depth-1" id="li-comment-228">
<div id="comment-228">
<div class="comment-author vcard">
<img alt='' src='http://1.gravatar.com/avatar/5ebd81318e7abfbd688508fb6d46f802?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />			<cite class="fn"><a href='http://blog.aquinzi.com/' rel='external nofollow' class='url'>A.Q.</a></cite> <span class="says">says:</span>		</div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
February 10, 2012 at 11:25 am		</div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Si,si, funca. Por eso lo subi</p>
<p>Es inocente. Es un programa que se activa como dice ahi arriba. Podes salir y volver al library reader thing del kindle tranquilamente, apretando las teclitas de ahi/por el menu.</p>
<p>Todo lo que escribo esta probado, a no ser que se diga lo contrario</p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="post pingback">
<p>Pingback: <a href='http://www.taghall.com/epub/' rel='external nofollow' class='url'>Epub | TagHall</a></p>
</li>
</ol>

</div><!-- #comments -->