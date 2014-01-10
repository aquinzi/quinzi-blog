.. title: Editar menú contextual de Opera
.. date: 2009-08-16 16:10
.. category: guide
.. tags: opera
.. lang: es
.. slug: opera-editar-menu-contextual


Teniendo problemas con la conexión, me decidí a volver a usar gestores de descargas, pero tales (o mejor, [Orbit Downloader](http://www.orbitdownloader.com/)) no se integraban con Opera. 

En Opera vayan a <kbd>Herramientas \> Preferencias</kbd> (o
<kbd>alt+p</kbd>), pestaña <kbd>Avanzado</kbd> y a la barra de la izquierda
vayan a <kbd>Barras</kbd>.

Opcional: duplicar el ``Opera Standard`` en <kbd>Configurar menú</kbd>.

![Menu Setup de Opera](/images/2009/opera01.gif)

Una vez duplicado, cierren Opera. Vayan a su profile + menu, usualmente es en: ``C:\Documents and Settings\[usuario]\Datos de programa\Opera\[versión de Opera]\menu``. Si no saben, vayan a <kbd>opera:about</kbd> (yendo por el menu <kbd>Ayuda \> Acerca de Opera</kbd>) y fijense en la sección de
``Rutas``.

En esa carpeta se encuentra un archivo ``.ini``. En mi caso, como no le
cambié el nombre es: ``standard\_menu (1).ini``. Ábranlo en un
editor de texto y busquen ``[Link Popup Menu]`` . Ahi estan todas las
opciones de cuando se hace click sobre un link. 

Al final de esa sección agreguen un separador (solo para quede lindo), copien y pegen esa linea que es algo asi ``--------------------[número]``, y cambien el número ese por uno más.
Despúes de esa linea, peguen esta y modifiquen:

~~~~~~~~~~~~~~~~~~~~~~.ini
Item, "Download with Orbit" = Execute program, "C:\Archivos de programa\Orbitdownloader\orbitdm.exe","%l"
~~~~~~~~~~~~~~~~~~~~~~

Donde "Download with Orbit" es lo que se va a mostrar al hacer
click derecho/menú contextual. 

La ruta es hacia donde está el programa propiamente dicho. El parámetro
``%l`` es el ``lnk``.

Guarden el archivo, (re)inicien Opera. Vayan a un link de descarga
(cualquier tipo de archivo) y et voilà! aparece en el menú!

![Botón contextual con opción agregada](/images/2009/opera02.gif)

Hay otra opción que es para descargar contenido multimedia al estilo
Youtube. Obviamente, se puede hacer abriendo ``grab++`` (viene incluído
en el paquete), pero como a veces no hay ganas de abrirlo, también se
puede hacer por menu.

En el .ini busquen ``[Document Popup Menu]`` . Esto es cuando haces
click en un lugar "limpio" (sin imágenes, links, etc). Agreguen y modifiquen al final:

~~~~~~~~~~~~~~~~~~~~~~.ini
Item, "Grab++ Video By Orbit"="Execute program,"C:\Archivos de Programa\Orbitdownloader\Grab.exe","%u""
~~~~~~~~~~~~~~~~~~~~~~

Guarden y reinicien Opera. En un lugar X de la página (en este ejemplo, un video
de Youtube, al lado del video), y sale el menú:

![Botón contextual con opción agregada](/images/2009/opera03.jpg)

Esto abre el ``Grab++`` (un addon sería) y trae el video (previa
recarga de la página). 

![Muestra del addon](/images/2009/opera04.gif)

<h3> Comments </h3>

<div id="comments">

<ol class="commentlist">
<li class="comment even thread-even depth-1" id="li-comment-101">
<div id="comment-101">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/a7365cb580a32f88c276cab521f7a84d?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />      <cite class="fn">Luxiano</cite> <span class="says">says:</span>   </div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
August 16, 2009 at 4:52 pm    </div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Ves eso??? se me cae una idola :P</p>
</div>

</div><!-- #comment-##  -->

</li>

</ol>



</div><!-- #comments -->