.. title: Dynamic to Static (Wordpress a Pelican)
.. date: 2013-01-22
.. category: guide
.. tags: wordpress, pelican, static, python, dropbox
.. lang: es
.. slug: wordpress-to-pelican


[TOC]

Por qué: 

1. Because I can
2. Cada vez **me llevo peor con Wordpress**
3. **Soy blogger casual**, no necesito florecitas que cambian de color según el estado de ánimo de un animal en Samoa.
4. **Todos los posts los escribo en markdown**, que los conviertos en html para pegarlos en Wordpress. No me tengo que olvidar si tiene imagénes y subirlas (y cambiar las rutas).
5. Puedo juguetear mas con el css y html (porque uso/aba wordpress.com)
6. Soy de ir en contra de la corriente (?)
7. Quiero llegar a los 10 items
8. Odio que haya que descargar 10 mb de javascript para el dashboard de Wordpress + otros 50mb para la cosas internas (relacionado con el punto 2)
9. estoy aprendiendo python
10. ya llegué


Presentación
---------------

Teniendo Wordpress hosteado/.com gratuito, no tengo mucha libertad para ciertas cosas. Pasé de wordpress.org a wordpress.com para evitar el tema de las actualizaciones seguidas, spam, seguridad y eso.

Todo iba bien, hasta que los de Wordpress decidieron **abrirse mas como CMS** que como sistema de blogging. Lo entiendo, es natural. Bien. No me gusta. No se si porque yo asocio Wordpress con blog y no un CMS completo a lo Joomla! o Drupal, o porque si las cosas en el backend estan mal organizadas para ser CMS/orientadas a blog, o si es mi conexión que no me deja disfrutar al máximo o qué. 

**Por temas de conexión y que el editor de Wordpress apesta**[^1], añadido a tener una wiki en localhost y encariñarme con los [LML](http://en.wikipedia.org/wiki/Lightweight_markup_languages), **escribía los posts en markdown** (que antes no me caía bien, hasta que empecé a usar [Pandoc][]), los pasaba a HTML, hacia search & replace para las imágenes (aunque se puede obviar si se suben primero las imágenes), y **recien ahí lo pasaba a Wordpress**. No es lo mas cómodo del mundo, pero servía.

[^1]: y por alguna razón, ya no hay tantos *offline blogging systems* como Raven o Windows Live Writer. Creo que Wordpress habia puesto la opción de actualizar por e-mail, pero nunca la probé. Debe ser un dolor si queres poner imágenes

Por alguna razón que ahora no recuerdo, empecé a buscar (o encontré de casualidad) scripts que pasan ``.txts`` con LML a html. Eso me hizo pensar: "hey, capaz me puede servir". Después de descartar un par que no me servían (estan apuntados a los usuarios de Linux y para usarlos en Windows era mucho lio), me decanté por [Pelican][].

Pelican es un script de Python que toma archivos de texto con markdown, reStructuredText o AsciiDoc, los pasa por un theme, y te genera un blog estático/html. Puro y duro, a la vieja escuela. Con categorias, tags, rss, páginas. Vamos, lo básico para un blog.

Yo lo estoy hosteando en [Dropbox](https://www.dropbox.com/referrals/NTYxNzc3MDQ5), después de decidir que subir las cosas por FTP era bastante molesto [^2]/las únicas razones por la que quiería un host apache era por el ``.htaccess`` (el rewrite) para hacer magia pero no valía mucho hacer eso para mi humilde blog. **También lo podes hostear en GitHub** si ya tenes cuenta ahi y no te molesta hacer commits. CAPAZ que algun día lo pase ahi (tengo como pendiente GitHub).

[^2]: en realidad no, podes crearte una cuenta en [mybackupbox](http://mybackupbox.com) y que se sincronice/backup-ee automáticamente a un FTP. Esto abre la posibilidad de usar cosas como base de datos y php.

Si solo te interesa hacer la parte de archivos de texto en Dropbox SIN generar html y demas, tenes opciones como [Calepin](http://calepin.co/) y [scriptogr.am](http://scriptogr.am/)


Instalación en Windows
------------------------

Porque en Linux este tipo de cosas es mas fácil.

Por ahora, [Pelican][] corre bajo **Python 2.7**, hay un fork para que ande en Python 3 pero no lo pude hacer andar (tampoco probé mucho).

**Nota**: yo explico como hacer esto manualmente, pero se puede instalar con ``pip``.

1. instalación normal de [Python](http://www.python.org/download/)
2. bajar los source files de [Pelican][] y extraerlos
3. abrir el command line/consola en la carpeta anterior y:

	    python setup.py intstall

    Si te pide el setuptools: [http://pypi.python.org/pypi/setuptools/](http://pypi.python.org/pypi/setuptools/) o ``pip install setuptools``

    Esperar que se haga el chirimbolo.

4. como quiero usar Markdown, lo [instalo para python](http://packages.python.org/Markdown/install.html) (de la misma manera que lo anterior)
5. Y el [pygments](http://pygments.org/) para el syntax highlighting


Configuración
--------------

Se crea un ``config.py`` para las configuración siguiendo [las variables en los docs](http://pelican.readthedocs.org/en/latest/settings.html) (o usas como base las que ya te vienen en el archivo)

Si usas Markdown, vas a querer usar los [markdown extra](http://packages.python.org/Markdown/extensions)


Andando
----------

Crear un post con el [metadata correspondiente](http://pelican.readthedocs.org/en/latest/getting_started.html#writing-articles-using-pelican). El básico es el titulo, y si estas en Windows necesitas poner si o si la fecha.

Ir a la carpeta root de tu Pelican, abrir una linea de comandos y poner: ``[Python_path]\Scripts\pelican.exe input/ -s config.py``

**Nota**: para probar, podes obviar la parte de configuración.

**Nota 2**: si se corre en la carpeta del contenido, para el path se puede usar ``.`` (punto)

Yo lo puse en un script/bat cosa de no escribir eso todo el tiempo.

Themes
--------

Para los themes/templates, Pelican usa [Jinja2](http://jinja.pocoo.org/). Nunca usé un *template engine*, siempre lo tildan de complicados y demas, pero este anduvo bien. Es fácil, tan fácil como crear vos un mini-template "engine" en php.

Podes [crear](http://pelican.readthedocs.org/en/latest/themes.html) los tuyos, podes bajar otros [manualmente](https://github.com/getpelican/pelican-themes) o usar la [linea de comandos](http://pelican.readthedocs.org/en/latest/pelican-themes.html)


Migración Wordpress -> Pelican
---------------------------------

### Posts y páginas

Pelican tiene un [conversor](http://docs.getpelican.com/en/latest/importer.html). Como yo lo necesité para Wordpress, me voy a centrar en ese. Necesitas:

* [BeautifulSoup-3.2.1](http://www.crummy.com/software/BeautifulSoup/#Download) (las 4.x no funcionan)
* [Pandoc][] (amo pandoc)
* el export de Wordpress (``.xml``)

Una vez que tenes eso, corres (cambiar "markdown" por el formato que quieras):

	[Python_path]\Scripts\pelican-import --wpfile -o [path_output] [path_wordpress.xml] -m markdown

### Imágenes

Como paso de wordpress.com a Pelican, tengo que descargar las imágenes de alguna forma. Se puede mediante cositas guay como PageNest y similares, pero es mucho lio pensar un regex solo para descargarlas.

Ya que tenemos el ``.xml`` del export, podemos instalar un Wordpress en localhost (o hosteado en otra parte para hacer pruebas). Como tengo un Wordpress en localhost que hace años que no lo uso, tuve que eliminar todas las cosas que tenia antes (en <kbd>phpmyadmin > eliminar el contenido de las tablas/truncate</kbd>), actualizarlo + actualizar base de datos + actualizar/instalar el plugin de import (que no viene como funcionalidad/core por alguna razón).

Una vez hecho eso, se va a <kbd>tools > import > wordpress > seleccionar archivo > linkear los autores > importar</kbd> \> esperar.

Y se espera.

Varios minutos.

Hasta que esté.

Ya con las imágenes en nuestro poder y procesadas/eliminar las duplicadas, hay que ponerlas en la carpeta input de pelican (en ``images`` o como la llamaste). Aca se ve si se quieren poner de alguna estructura en especial o no.

Pro tip para las imagenes duplicadas:

* primero eliminar las ``-thumb``
* las demás tienen este nombre: ``[nombre orig]-300x225.jpg`` (donde el numero de tamaño + extension cambian). Esto se puede eliminar facilmente con un script que tengas a mano, o sino con buscadores estilo [Everything](http://voidtools.com/) poniendo: ``[path a las imagenes]\ *-*x*``

Ahora solo queda hacer un search & replace para cambiar la url del estilo ``http://[username].files.wordpress.com/[año]/[mes]`` a tu estructura actual.

### Categorías y tags

Ojito con las categorias. Primero: al hacer un sistema simple, **no tiene jerarquia de categorias** como Wordpress. Fijate como manejas eso. Segundo: **solo acepta una categoria por post**. Si estas cosas te molestan, podes optar por usar directamente tags.

### Comentarios

Al pasar a Pelican, no sabia si incluir comentarios. Mi blog es personal, no tiene muchos o directamente no tiene, pero siempre quise eso de "che, yo resolví eso de otra forma: tal tal tal. Dejo el comentario por si a alguien le sirve", asique opté por usar Disqus (por que es el único que conozco y no tengo muchos comentarios, por eso ni me molesté en buscar alternativas).

Si queres transferir los comentarios: Disqus tiene una opción de traer los de Wordpress, pero requiere un plugin (o sea, me jodo). Yo hice copy & paste del html (para hacer algo manual viste, sino era todo automatizado) y los pegué en la entrada correspondiente.

Tips:

* Conviene desactivar la opcion de conversión de caritas/emoticones ( ``:D``, ``:)`` ) a imágenes. A no ser que quieras que se referencien al viejo blog o hacer trabajo extra para eliminarlas/pasarlas a texto.
* Hacete un regex para sacar el link al comentario cuando se clickea en la fecha (yo lo hice, mas que nada, porque tomaba la dirección localhost). Usé este: ```<a href="http://localhost/wordpress/\?p=\d.+comment-\d.+">\n(.+)</a>```


Pros y Cons
-------------

Como todo, hay pros y contras por cada sistema.

Wordpress, pros:

* es Wordpress
* si lo hosteas, tenes libertad absoluta
* es un buen sistema de blogging
* es popular

Contras:

* es Wordpress
* editor de posts feo/lento
* seguridad (normal)
* Le falta un par de cosas, como poner footnotes facilmente[^3]

[^3]: una vez que los usas, no podes parar. Son adictivos.

Pelican, pros:

* **puedo escribir en markdown**, y usar los **markdown extentions** (que lo hacen mas copado/completo). Al escribir en puro texto, puedo elegir el editor que yo quiera: [Notepad++](http://www.notepad-plus-plus.org/), [Sublime Text](http://www.sublimetext.com/) [^6], o hacerme la cool y abrir un precesador de texto completo de una suite ofimatica, el Wordpad, o algun editor designado para Markdown.
* para actualizarlo es rapido: escribis, pones el archivo en la carpeta de input, corres el script y listo. Nada de andar loggeandote \> click en nuevo post \> esperar a que cargue \> titulo \> esperar que genere el slug \> escribir \> seleccionar categoria y tags \> publicar
* tenes un "backup"/raw de tus posts, faciles de transportar o convertir a otro formato.
* **no tenes que lidear con un WYSIWYG**. Para ciertas cosas esta bueno, pero muchas veces te obstaculizan al escribir el contenido.
* es estático = **0 preocupaciones por la seguridad**. Solo te preocupas por el del host.
* **es muy facil escribir posts multilenguajes**. Esto es para un usuario específico y básicamente es lo mismo que Wordpress (crear un post nuevo), pero por alguna razón se me hace mas simple: los posts solo deben tener el mismo slug y la diferenciación del idioma. Acá hay un ejemplo reciente cuando tuve [problemas con android y la bateria](link://slug/android-battery-drain).
* Puedo/se me hace mas fácil, linkear a otros posts que escribi anteriormente

[^6]: Que ahora me cae mejor. Te instalas el package control y tenes infinidad de plugins. Mas o menos le tomas la mano en la parte de configuración (puro texto) y lo dejas (casi) como quieras. Solo me falta buscar algo simple para que el editor se haga de dos columnas y pase el archivo activo a la otra "vista", sin presionar 10 teclas por acción.

Contras:

* No tenes los stats, pero eso se puede cambiar por google analytics.
* No tenes la facilidad de que los lectores califiquen un post, si lo quieren compartir, etc. No me molesta porque no lo uso pero capaz que alguno diga que es indispensable.
* No tenes la gran disponibilidad de themes hechos (aunque puede ser bueno, hay varios que parecen hechos en front page)
* No tenes la gran disponibilidad de plugins hechos (hay repetidos, hay muertos, hay de todo. Pero tampoco le quiero meter uno que agregue una carita al titulo del blog dependiendo si se encontraron nuevos fósiles).
* Es python, todos sabemos como son los errores/debug de python (si sos principiante).
* Genera contenido estático, nada de comentarios ni base de datos para no se que cosa. Los tenes que agregar vos y con Javascript o algún workaround.

Procon (no se como ponerla): **Te tiene que gustar escribir**, y por escribir me refiero a escribir variables y demas, tanto del sistema específico (Pelican) y del LML que elegiste. Capaz que a los programadores esto seria un pro, pero para el resto de los mortales seria una contra (a no ser que crees un template).


Conclusión
------------

Esta mudanza la hice para probar cosas nuevas, solo actualizo el blog una vez al mes/cada 3-6 meses y ni tengo host propio. No es que este todos los dias escribiendo un post, o cada semana; tengo mis periodos de "ay si, hoy escribo y oh! ay mira escribi uno la semana pasada. Me siento re blogger" y de "ah mira, hace 6 meses que no escribo... qué se le va a hacer, no?".

Pero cada vez que SI actualizaba, odiaba profundamente el paso a Wordpress. Esta bien, si, podes ponerle un plugin para que tome la sintaxis markdown y todo eso, recordá que yo estoy/aba en wordpress.com y no pienso/aba instalar Wordpress en el host. Ya lo hice una vez y no me gustó, por eso me pasé a .com.

La actualización por medio de este sistema[^4] es muy cómodo, solo pongo el post terminado en la carpeta (o lo creo ahi directamente), corro el script y listo. Solo tengo que tener Dropbox corriendo para que actualice. Si quiero hacerlo aun mas simple, puedo usar los servicios nombrados más arriba y solo poner el txt en Dropbox y listo. Sitio actualizado. También es muy rápido generar los ``.html``, con mi blogcito ni tarda 5 segundos (y eso que linkeo a otros posts).

[^4]: txt -\> pelican -\> dropbox

Por que no un host cualquiera/FTP? Por que tenia que hacer un paso "extra" y sincronizar a FTP o anotarme a otro servicio para que haga un sync/backup de carpeta X de dropbox a carpeta X del host[^5]. 

[^5]: ahora que lo pienso, capaz que se pueda poner el sitio en FTP como disco en red (o como se llame) en Windows. Lo hice una vez para pasar cosas al celular. Ahi puedo hacer las cosas directamente y me ahorraría unos pasos.

No digo que me vaya a quedar con este sistema, capaz que algun dia diga "para que quiero gastar X espacio en mi disco/dropbox si con wordpress.com no me preocupo" o "hago mucho lio para lo que actualizo", etc., elimino las cosas, hago un par de cambios por alli y por allá y listo, vuelvo a wordpress.com, quien sabe. Solo quiero probar. 


[Pelican]: https://github.com/getpelican/pelican
[Pandoc]: http://www.johnmacfarlane.net/pandoc/

