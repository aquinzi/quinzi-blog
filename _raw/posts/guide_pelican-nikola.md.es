.. title: De Pelican a Nikola (tutorial)
.. lang: es

[TOC]

Cuando pensaba en mover mi blog a este nuevo dominio, pensé en usar [Pandoc][] como conversor[^1]; incluso creé [pandy](http://quinzi.com.ar/projects/pandy) para eso. Pero después tuve los "problemas" (ok, estaba vaga) de RSS, categorias, tags, index, etc. y lo dejé.

[Pandoc]: http://www.johnmacfarlane.net/pandoc/
[^1]: Porque odio abrir un HTML block y el markdown de adentro no se *parsea*. Sé que dice en la referencia de [markdown](http://daringfireball.net/projects/markdown/) pero hey: **es 2014** y necesito eso. Pero igual me encanta los admonition en [Python-Markdown](http://pythonhosted.org/Markdown/)

En un principio pensé en [seguir usando Pelican](link://slug/wordpress-to-pelican) ya que es [fácil y personalizable](http://docs.getpelican.com/) aunque no tuviera soporte para Pandoc[^2]. Pero mas tarde me daría vagancia pasarme a otro sistema (no que postee mucho, pero **me encanta el markdown de Pandoc**).

[Pelican]: http://docs.getpelican.com/
[^2]: Que [ahora veo](http://docs.getpelican.com/en/3.3.0/internals.html#how-to-implement-a-new-reader) que no es tan dificil implementarlo. *Oh, well*.


Acrylamid
-----------

En mis búsquedas encontré [Acrylamid][] que se ve bastante bien. Es como el *blog generator* de programadores/hackers, donde podés hacer varias cosas. También tiene *incremental builds* así no regenera todo desde cero.

[Acrylamid]: http://posativ.org/acrylamid/index.html

Otras cosas incluyen:

  * diferentes meta tags: MultiMarkdown (como Pelican), YAML o rst.
  * los borradores se activan con *booleans*. Yay!.
  * podés [incluir sintaxis de templates en los posts](http://posativ.org/acrylamid/advanced.html#jinja2-or-mako-in-entry) e incluso usar las variables de configuración.
  * summary/intro automático
  * acrónimos y abreviaciones de usuario en un archivo de texto.
  * [los views](http://posativ.org/acrylamid/views.html) que se ven copados y personalizables.
  * output de linea de comandos con color. GRACIAS!
  * trae para hacer pingback a otros blogs y postear a twitter.
  * información del blog: cuántos posts publicados, cuántos borradores, uso de tags. También cuando se compiló por última vez, tamaño de cache...
  * [ejecutar comandos de shell en un post](http://posativ.org/acrylamid/advanced.html#using-the-system-s-shell): como listar una carpeta, incluir otro archivo, etc.
  * mostrar el sitio con un comando
  * filtros de post-processing

No tiene categorias (pero se pueden [usar vistas](https://github.com/posativ/acrylamid/issues/121)), galerias automáticas (pero se puede usar sintaxis de templates en un post, [asi que está cubierto](http://posativ.org/acrylamid/howtos.html#image-gallery)) y la [creación de themes](http://posativ.org/acrylamid/theming.html) no es tan automática: tenés que listar todos los archivos que usa tu theme en un archivo ``__init.py``.

Quería usar Acrylamid, pero era medio "complicado" para setearlo en Windows si querías usar [python-magic](https://github.com/ahupp/python-magic) (tuve problemas con eso). Salteé esa parte, pero me seguía dando error con los *locales*.


Nikola
---------

Después recordé que una vez me había cruzado con [Nikola][], originalmente creado por un argentino, asi que tenía que probarlo :P.

[Nikola]: http://getnikola.com/

No es tan *feature-rich* (o de fácil personalización) que [Pelican][], y la documentación tampoco es tan "completa": hay un par de cosas que se encuentran en los Google Groups, GitHub o mirando en el código. Tampoco no es tan *feature-cool* como [Acrylamid][]. De todas formas, creo que va en buen camino y es el mas nuevo de los tres.

Tiene cosas copadas:

  * *incremental builds* (como Acryamid)
  * [creación de galerías automáticas](http://getnikola.com/handbook.html#image-galleries)
  * categorias (como Pelican)
  * creación de themes fácil (como Pelican)
  * mostrar el sitio con un comando y tiene "Live" re-rendering 
  * [posts "retirados"](http://getnikola.com/handbook.html#retired-posts) (asi no tener 404 errors)
  * [redirecciones](http://getnikola.com/handbook.html#redirections) (por si no podes usar ``.htaccess``)
  * [*deploy commands*](http://getnikola.com/handbook.html#deployment) (ejecutar varios comandos y no tener que hacer un simple script)
  * filtros de post-processing
  * soporte para internalización (la interfaz del sitio/blog puede estar en varios idiomas)
  * posts/páginas protegidos con contraseña.
  * ["programar"](http://getnikola.com/handbook.html#queuing-posts) posts/páginas 
  * Soporte a gran selección de (3rd party) sistemas de comentarios y [AnnotateIt](http://annotateit.org).
  * [Extensiones para reStructuredText](http://getnikola.com/handbook.html#restructuredtext-extensions) (si usas eso).
  * Suporte para Twitter cards
  * soporte para raw post/página (mostrar el código del post en texto plano)

  Los drafts se aplican como un "tag" en el metadata de tags y se publican por default. No tiene soporte de color en el output de la línea de comandos (pero se está viendo) y lo de "mostrar el código del post y copialo" está habilitado por default.


La mudanza
-----------

### Instalar Nikola

Se [descarga Nikola](http://getnikola.com/) e instala. Por default, usa [Mako](http://makotemplates.org) como *template engine*, pero tiene soporte para [Jinja2](http://jinja.pocoo.org/). Se puede leer las [dependencias en la documentación](http://getnikola.com/handbook.html#installing-nikola) y si queres podes ``pip install -r requirements.txt`` o ``requirements-full.txt`` para toda la cosa.

Si estás en Windows, debés descargar e instalar las versiones compiladas de lxml y pillow. Podés buscarlos en sus [PyPI](https://pypi.python.org/) o ir a <http://www.lfd.uci.edu/~gohlke/pythonlibs/>. Acordate de descargar e instalar dependiendo a tu versión y arquitectura de Python (32 o 64 bits).

### Iniciar

Para iniciar o crear un blog con las opciones default y estructura de carpetas, ejecutar ``nikola init path/to/mysite`` o, si queres algo de contenido, ``nikola init --demo path/to/mysite``.

### Convertir metadata

Pelican usa el estilo de metadata de [Multimarkdown](https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide) mientras que Nikola usas algo similar: el mismo sintaxis pero con ``..`` al frente.

Un ejemplo sería:

	Title: nice title! :D      # Pelican
	.. title: nice title! :D   # Nikola

Lo podés hacer a mano o [descargar mi script de python](https://gist.github.com/eikiu/8377090). También mueve el estatus de "draft" al tag de Nikola, y el "summary" de Pelican al "description" de Nikola (activado por default). 

!!! note
	Nikola no tiene/ve el meta key "modified" internamente, pero se puede tener como uno personalizado. Solo se accede diferente en los themes.


### Traducciones

Si tenes posts o páginas traducidas tenés que prestar atención: los sistemas entre los generadores son distintos. En Pelican tenés el mismo slug o título en los posts, y diferentes nombres de archivos (creo); Nikola usa los nombres de archivos.

La facilidad de esto depende de tu setup, pero tenes que terminar con algo como: ``nicefile.md`` para el post en el idioma default, y ``nicefile.md.es`` (contenido en español) para el traducido.

Lo bueno de esto es que no duplicas el meta. Por ejemplo, creas el meta key "tags" en el idioma default pero no lo especficas en el traducido. Así al actualizar, lo haces solo en el "master" o "padre" y el "hijo" solo lo copia.

Si no queres tener metadata duplicada en los archivos, y después de que renombraste y convertiste los archivos, podes correr [este script de python](https://gist.github.com/eikiu/8377186) para eliminarlos. Recordá que solo es opcional (o por lo menos no rompió mi setup).


### Rutas de imágenes

La sintaxis también es diferente pero se puede hacer facilmente con *search and replace*. Podés usar lo que quieras, como grep. Si estas en Windows, recomiendo [grepWin][] si queres algo con GUI. Esto es depende de como tengas los archivos pero yo hice algo asi:

Sintaxis markdown:

  * Search ``(|filename|../../images/`` 
  * Replace ``(/images/``

HTML:

  * Search ``<img src="../../static/images/`` 
  * Replace `` <img src="../images/``


[grepWin]: http://stefanstools.sourceforge.net/grepWin.html


### Links entre posts

Otra vez, es diferente en los sistemas y puede ser o muy fácil o muy dificil dependiendo de tu organización: Pelican usa los nombres de archivos para linkear contenido, mientras que Nikola usa el slug del post.

Si tenes el nombre de archivo como el slug (o muy similar) podes usar *search and replace*, como:

  * Search: ``\(\|filename\|(.+)\.md\)``
  * Replace: ``(link://slug/$1)``

Recomiendo hacerlo seguido de las imágenes, y tenes que checkear (posiblemente a mano) después.


### Sintaxis de Plugins 

No usé muchos plugins que usaran sintaxis en mis posts, solo uno: [interlinks](http://quinzi.com.ar/projects/interlinks). Esto fue fácil de hacer con *search and replace*.


Otras cosas de Nikola 
-----------------------

### Localización en Windows

Si vas a usar la internalización en Windows, tenes que configurar los ``LOCALES`` como (ejemplo):

	LOCALES = {'en' : 'English_United States', 'es' : 'Spanish_Argentina'}

No importa tu idioma en Windows, funciona tanto en (Windows) inglés como español.


### Linkear internamente

Para linkear a otro post, tag, archivo, etc.

  * galeria: ``link://gallery/gallery_name``
  * index de tags: ``link://tag_index``
  * página de tag: ``link://tag/tagname``
  * RSS de tag: ``link://tag_rss/tagname``
  * index del blog: ``link://index``
  * página [NUMERO] de index: ``link://index/NUMERO``
  * archivo por año: ``link://archive/ ``
  * posts de [AÑO] ``link://archive/AÑO``
  * feed del blog: ``link://rss``
  * otro post: ``link://slug/the-nice-slug``

### Pandoc

Como Pandoc usa la extensión para reconocer el input, tenes que configurar esa extensión en ``COMPILERS`` en la configuración. Si no se encuentra, usa Markdown como default.

Mientras que funcionó para mi usando markdown, no lo hizo con otros, como Mediawiki. No sé por qué.


### Carpetas y subcarpetas de posts

[Nikola][] mantiene la estructura de carpetas y subcarpetas. Si tenés ``file_g.txt`` dentro de ``carpeta_abc``, esta estructura se mantiene en el output. Puede ser bueno si lo queres usar como categorías en el output. No hay manera de configurarlo.

En [Pelican][] podés tener varias subcarpetas y organizalos como vos quieras, y el output se puede configurar (por default, por fecha) como quieras.


Testeando
--------

Inicialmente los posts van en una carpeta ``posts`` en el root y las páginas en ``story``. La carpeta de imágenes podría en ``files``. Todo esto se puede configurar.

Después de configurar el ``conf.py``, que esta muy bien comentado, se puede probar. 

Crear el site con ``nikola build``. Después se puede abrir los archivos al navegador o usar un local server con: ``nikola serve`` y yendo a ``http://127.0.0.1:8000``.