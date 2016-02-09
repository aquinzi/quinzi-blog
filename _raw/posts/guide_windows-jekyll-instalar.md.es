.. title: Instalar Jekyll (y Ruby) en Windows
.. lang: es
.. date: 2015-09-29
.. updated: 2016-02-09
.. category: guide
.. tags: jekyll, ruby, windows
.. lang: es
.. slug: windows-jekyll


Pequeña guía para tener una instalación de GitHub Pages en Windows, para testear Jekyll antes de "pushear" los cambios. Recomendado cuando estas haciendo un theme de un blog o creando un sitio.


Instalar Ruby
-------------------

Se necesita Ruby y Ruby Dev-kit para poder instalar los "gems".

Primero descargar ruby de [Ruby Installer](http://rubyinstaller.org/downloads/). Al instalar, checkear la opcion de "``Add Ruby executables to your PATH``".


!!! note
	Al 2016-02-09, GitHub Pages usa la versión 2.1.7; la mas cercana listada es la 2.1.8. Podes descargar el instalador de Ruby 2.1.7 en los [archivos](http://rubyinstaller.org/downloads/archives) cosa de asegurarte.


Del [mismo sitio](http://rubyinstaller.org/downloads/), descargar el Ruby DevKit correspondiente a la versión. La descarga es un archivo descomprimible ``.exe``. Descomprimirlo en alguna carpeta sin espacios (por ejemplo: ``C:\Ruby\DevKit\``).

Para "unir" el devkit e instalarlo, seguir los siguientes pasos:

  1. con la línea de comandos ir a la carpeta (``cd path\carpeta\``)
  2. Ejecutar ``ruby dk.rb init``, esto auto-detecta las instalaciones de Ruby y añade a un archivo de configuración necesario para el próximo paso.
  3. Ejecutar ``ruby dk.rb install`` para "unir" el DevKit.


!!! note
	Si da error de "Comando no encontrado" verificar que en el ``PATH`` este como ``[path\a\ruby\]bin\`` (notar barra invertida final)


~~Si vas a necesitar "Syntax Highlighting" y elegiste ``pygments``, tenés que instalar Python (para Jekyll 2 o inferior).~~

Al 2016-02-09, GitHub Pages solo acepta [Rouge](https://github.com/jneen/rouge) para "Syntax Highlighting" (escrito en Ruby).



GitHub Pages local: instalación de Jekyll y complementos
----------------------------------------------------------

En Windows no se puede instalar el [gem de GitHub Pages](https://help.github.com/articles/using-jekyll-with-pages/#installing-jekyll) por que tira error al querer instalar RDiscount, porque (según cita):

> (RDiscount) It uses a POSIX function that is not available under Windows, even if you adjusted most of it. 
>
> ([Luis Lavena en Super User](http://superuser.com/a/87438))


!!! info
	Al 2016-02-09, GitHub Pages solo acepta [kramdown](http://kramdown.gettalong.org/); desconozco si sigue tratando de descargar RDiscount (parece que si).


Por esto, es mejor instalar bundler (``gem install bundler``) y usar un ``gemfile`` (llamado "Gemfile") en donde se encuentra el proyecto, listando lo de arriba con las versiones que se usan:

``` {.ruby}
	source 'https://rubygems.org'

	require "json"
	require "open-uri"
	#get versions specific to github
	versions = JSON.parse(open("https://pages.github.com/versions.json").read)

	gem "jekyll", versions["jekyll"]
	gem "jekyll-coffeescript", versions["jekyll-coffeescript"]
	gem "jekyll-sass-converter", versions["jekyll-sass-converter"]
	gem "kramdown", versions["kramdown"]
	#gem "maruku", versions["maruku"] #jekyll 3.0 uses kramdown
	#gem "rdiscount", versions["rdiscount"] #we cant install it in windows
	#gem "redcarpet", versions["redcarpet"] #no support in GH pages (2016-02-09)
	#gem "pygments.rb", versions["pygments.rb"] #no support in GH pages (2016-02-09)
	gem "rouge", versions["rouge"] #for code highlighting
	#gem "RedCloth", versions["RedCloth"] #textile, no support in GH pages (2016-02-09)
	gem "liquid", versions["liquid"]
	gem "jemoji", versions["jemoji"]
	gem "jekyll-mentions", versions["jekyll-mentions"]
	gem "jekyll-redirect-from", versions["jekyll-redirect-from"]
	gem "jekyll-sitemap", versions["jekyll-sitemap"]
	gem "jekyll-feed", versions["jekyll-feed"]
	gem "jekyll-seo-tag", versions["jekyll-seo-tag"]
	#gem "ruby", versions["ruby"] #avoid problems in windows
	gem "github-pages", versions["github-pages"]
	gem "html-pipeline", versions["html-pipeline"]
	gem "sass", versions["sass"]
	gem "safe_yaml", versions["safe_yaml"]
```

(idea del código de [jamesjoshuahill](https://jamesjoshuahill.github.io/note/2015/01/08/handling-failed-builds-on-github-pages/))

Se instalan los gems (con bundler) yendo al directorio con el Gemfile y ejecutar ``bundle install``.

Puede haber problemas con el certificado de ``https://rubygems.org``. Si no se quiere probar, instalar (eliminado rdiscount, sin documentacion) los gems con el siguiente comando (al 2015-09-28):

    gem install jekyll:3.0.2 --no-rdoc --no-ri jekyll-sass-converter:1.3.0 --no-rdoc --no-ri jekyll-textile-converter:0.1.0 --no-rdoc --no-ri kramdown:1.9.0 --no-rdoc --no-ri redcarpet:3.3.3 --no-rdoc --no-ri RedCloth:4.2.9 --no-rdoc --no-ri liquid:3.0.6 --no-rdoc --no-ri rouge:1.10.1 --no-rdoc --no-ri jemoji:0.5.1 --no-rdoc --no-ri jekyll-mentions:1.0.0 --no-rdoc --no-ri jekyll-redirect-from:0.9.1 --no-rdoc --no-ri jekyll-sitemap:0.10.0 --no-rdoc --no-ri jekyll-feed:0.3.1 --no-rdoc --no-ri jekyll-gist:1.4.0 --no-rdoc --no-ri jekyll-paginate:1.1.0 --no-rdoc --no-ri github-pages-health-check:0.6.0 --no-rdoc --no-ri jekyll-coffeescript:1.0.1 --no-rdoc --no-ri jekyll-seo-tag:0.1.4 --no-rdoc --no-ri ruby:2.1.7 --no-rdoc --no-ri github-pages:45 --no-rdoc --no-ri html-pipeline:2.3.0 --no-rdoc --no-ri sass:3.4.21 --no-rdoc --no-ri safe_yaml:1.0.4 --no-rdoc --no-ri


El error de certificado es un similar a:

    [!] There was an error parsing `Gemfile`: SSL_connect returned=1 
    errno=0 state=SSLv3 read server certificate B: certificate verify 
    failed. Bundler cannot continue.


Se soluciona de la siguiente manera:

  1. [descargar](http://curl.haxx.se/ca/cacert.pem) el archivo ``cacert.pem`` y guardarlo en (por ejemplo ejemplo) ``C:\RailsInstaller\cacert.pem``.
  2. Settear el ``SSL_CERT_FILE`` usando la línea de comandos: ``set SSL_CERT_FILE=C:\RailsInstaller\cacert.pem``. Se puede dejar "permanente" poniendolo en el ``PATH``.


También se puede hacer por proyecto:
   
  1. Guardar el archivo ``cacert.pem`` en el proyecto.
  2. A list item with a code block:
  
        ENV['SSL_CERT_FILE'] = File.expand_path(File.dirname(__FILE__)) + "/config/cacert.pem"



Correr Jekyll
---------------

Seguramente va a tirar un error de encoding, estilo:

    jekyll 2.4.0 | Error:  incompatible character encodings: CP850 and UTF-8

para solucionarlo ejecutar en la línea de comandos ``chcp 65001`` antes de ejecutar Jekyll.

En la carpeta donde se tiene los archivos:

  - Si se usó el fix de OpenSSL, hay que usar bundler: ``bundle exec jekyll serve``
  - Si no: ``jekyll serve``


Abrir en ``http://127.0.0.1:4000/``



----

Fuentes:

- [Run Jekyll on Windows: Step by step guide](http://jekyll-windows.juthilo.com/)
- [Solución al ``SSL_connect``](http://railsapps.github.io/openssl-certificate-verify-failed.html), que linkea a [un gist con las instrucciones](https://gist.github.com/fnichol/867550).
- [UTF issue when running Jekyll on Windows](http://bendetat.com/utf-issue-when-running-jekyll-on-windows.html)


<section id="changes">

Cambios
---------

  #. <time>2016-02-09</time> actualización a GitHub Pages usando Jekyll 3

</section>