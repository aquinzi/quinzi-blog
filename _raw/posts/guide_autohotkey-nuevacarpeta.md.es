.. title: AutoHotkey: Nueva Carpeta
.. date: 2009-05-09
.. category: guide
.. tags: autohotkey
.. lang: es
.. slug: autohotkey-nueva-carpeta

Uso Windows. Qué se extraña de otros
Sistemas Operativos? Keyboard Shortcuts (Atajos de teclado /
Comandos, Ctrl + C…) para una nueva carpeta. Sé que se puede apretando:
<kbd>AppMenu</kbd> (ese que funciona como el botón derecho) <kbd>arriba x2 > enter/derecha > enter</kbd>. O desde el menu de arriba en una
carpeta: <kbd>alt > enter/abajo > enter/derecha > abajo</kbd>. Pero es mucho lio, asique
pienso yo que con dos teclitas se soluciona parte del problema.

El programa a descargar es [Autohotkey](http://www.autohotkey.com) (Es gratuito,
OpenSource y para Windows). Dos versiones: exe y zip. Si queres crear
scripts rápidos, optá por el exe. Si no te interesa/no te molesta la
rapidez (solo son un par de pasitos mas, tampoco es mucho) anda con el
comprimido.

Una vez que lo instalaste, en una carpetita donde vas a
guardar los scripts hacé: <kbd>boton derecho\>crear nuevo AutoHotkey Script</kbd>.
Si bajaste el Zip, creas un archivo de texto con la extensión .ahk.

![Menú contextual](/images/2009/ahk_01.jpg)

Te aparece el archivo, le cambias el nombre (como ``nuevacarpeta``). Sobre éste, botón <kbd>derecho\>Edit Script</kbd>. Te aparece el bloc
de notas. El archivo contiene lo siguiente:

![Código default](/images/2009/ahk_02.jpg)

Eliminá todo y poné:

	#n::send {AppsKey}{up}{up}{right}{enter}

Explicación:

  * ``\#n`` es el Shortcut. En este caso es: <kbd>Win+n</kbd>.
  * ``send`` es para enviar "la info", solamente ponelo, sino no funciona.
  * ``{AppsKey}{up}{up}{right}{enter}`` es igual a <kbd>botón derecho > arriba > arriba > derecha > enter</kbd>. Es la traduccion de
lo que hariamos por mouse, o por la descripción por teclado que habia
escrito al principio.

Una vez esto, hacemos <kbd>botón derecho</kbd> sobre el archivo <kbd>abrir con > AutoHotkey</kbd> o se puede configurar para que haciendo doble click lo lance.

![Menú contextual](/images/2009/ahk_03.jpg)

Se nos carga el programita y ya está. Apretas <kbd>Win+N</kbd> y tenes tu carpetita nueva, aguardando renombrarla.

Podes poner que el AutoHotkey se cargue con Windows y asi
automaticamente el script; compilarlo y que te quede un exe que lo pones
en la carpeta de ``Inicio`` (y asi no necesitar el programa para correrlo); o
[bajar el archivo](http://www.mediafire.com/file/ymzjwztdnzr/AutoHotkey%20-%20Nueva%20Carpeta.rar) que contiene: el ahk
y el exe con un txt por si no sabes donde hay que ponerlo.

<h3> Comments </h3>

<div id="comments">

<ol class="commentlist">
<li class="comment even thread-even depth-1" id="li-comment-10">
<div id="comment-10">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/a7365cb580a32f88c276cab521f7a84d?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />			<cite class="fn"><a href='http://www.luxiano.com.ar' rel='external nofollow' class='url'>Luxiano</a></cite> <span class="says">says:</span>		</div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
May 23, 2009 at 5:48 pm		</div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Me leí un poco el blog, muy bueno, interesante, te felicito!</p>
<p>Tu paisano, Luxiano :D</p>
<p>Saludos!</p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="comment odd alt thread-odd thread-alt depth-1" id="li-comment-11">
<div id="comment-11">
<div class="comment-author vcard">
<img alt='' src='http://1.gravatar.com/avatar/5ebd81318e7abfbd688508fb6d46f802?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />			<cite class="fn">A.Q.</cite> <span class="says">says:</span>		</div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
May 24, 2009 at 11:29 am		</div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Muchas gracias :D</p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="post pingback">
<p>Pingback: <a href='http://eikiu.wordpress.com/2009/06/01/autohotkey-reemplazo/' rel='external nofollow' class='url'>AutoHotkey + Reemplazo | Intento de blog</a></p>
</li>
<li class="post pingback">
<p>Pingback: <a href='http://eikiu.wordpress.com/2012/12/17/goodbye-dropbox/' rel='external nofollow' class='url'>Goodbye, Dropbox? | Intento de blog</a></p>
</li>
</ol>




</div><!-- #comments -->