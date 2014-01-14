.. title: Sincronizar Tagaini Jisho con Dropbox
.. date: 2011-07-26
.. category: language
.. tags: nihongo, tagaini jisho, dropbox
.. lang: es
.. slug: tagaini-jisho-sincronizar-bd

Buscando programas que me ayuden con mi aprendizaje de japonés,
andaba en busca de uno que manejara mi listado de vocabularios. Uno que
no me deje poner duplicados, que me deje categorizar las palabras, con
un par de datos extras.

En mi búsqueda, pense usar un Excel, pero no se puede... bah, hay que
hacer "mucho lio" para que no deje duplicados y tal. Asique descartado.
Busqué un par mas: como [wakan][] y [zkanji][]. El primero ademas de
diccionario y tal (como el segundo) tiene un editor de texto que te pone
furigana (guia fonética) arriba de los kanji (también leí que se
pueden poner de costado). Al fin, para lo que yo queria eran
complicados/mucha *learning curve*. Descartado y descartado.

Habia decido hacer mi programita, al principio lo iba a hacer en php +
mysql... me tire para atras. Despues c++ .NET + SQLite... pero no sabia
mucho de c++ asique me incliné a VB.NET... pero quise hacer una busqueda
y no me salio. Desisti. Termine "haciendolo" en PHP+SQLite+CakePHP, iba bien, hasta que me dio vagancia seguirlo.

Al rato me dije: "hey! los 2 primeros programas que probé eran
diccionarios con capacidad de ponerlos en lista, voy a usar algo asi",
ahí se me prendió la lamparita y me acordé que tengo instalado [Tagaini
Jisho][].

Tagaini Jisho diccionario Japonés-inglés multiplataforma (Windows, MacOS
X y Linux) re copado y lindo. En realidad, [segun la página][], es
un asistente de estudio, eso es diccionario + flashcards + notas + tags
+ listas + la inclusión de las animación de cómo escribir los kanji con
colores bonitos.

Al grano: ¿Cómo hago para sincronizar los tags + puntaje de
flashcards + busquedas + listas + etc en Windows con Dropbox? . Los
pasos son los siguientes:

-   Localizar donde está la ``user.bd``. Usualmente esta en
``C:\Users\USUARIO\AppData\Local\Tagaini Jisho``.
Si no esta ahi por alguna razon aparente, basta con iniciar el
programa, ir a <kbd>Program > Preferences > User Data</kbd> y fijarse la ruta.
-   Sacarla / copiarla (como quieras) y ponerla dentro de una carpeta en
tu DropBox.
-   (Opcional) Cambiarle el nombre por uno mas descriptivo
-   Ahora hay que arreglar el acceso directo para que apunte a esa nueva
locacion: <kbd>click derecho > propiedades</kbd>. Al final de la caja de texto de ``destino``, agregarle (despues de ``"``): 

~~~~~~~~~~~~~~~~~~~~
--user-db="[path/a/basededatos.db"
~~~~~~~~~~~~~~~~~~~~

**Nota**: Con este método, la ruta que se ve en <kbd>Program > Preferences > User Data</kbd> NO
se actualiza. Habia leido que eso se iba a mejorar, dando una opción
mas visual para cambiar la locacion de la base de datos, pero todavia
no hay novedades.


[wakan]: http://wakan.manga.cz/
[zkanji]: http://zkanji.sourceforge.net/
[Tagaini Jisho]: http://www.tagaini.net/
[segun la página]: http://www.tagaini.net/about

<h3> Comments </h3>

<div id="comments">

<ol class="commentlist">
<li class="comment even thread-even depth-1" id="li-comment-193">
<div id="comment-193">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/4dff540a55fe51a182ab96df59c7fbe8?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />      <cite class="fn"><a href='http://www.cosas-simples.com.ar' rel='external nofollow' class='url'>asur</a></cite> <span class="says">says:</span>    </div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
July 27, 2011 at 9:06 pm    </div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>A veces pienso que estas cosas que posteás  están como 5 o 6 niveles más arriba de lo máximo a lo que yo podría siquiera aspirar a tratar de comprender.  :)</p>
</div>

</div><!-- #comment-##  -->

</li>
</ol>

</div><!-- #comments -->