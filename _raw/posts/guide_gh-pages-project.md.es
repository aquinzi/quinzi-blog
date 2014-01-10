.. title: GitHub Pages para proyectos
.. lang: es

[TOC]

Pasos simples para crear un [GitHub Pages](http://pages.github.com/) para proyectos/por repo (y no para usuario u organización) además de cositas varias.

Los pasos estan tanto para CLI como para GitHub for Windows (TortoiseGit es "similar" a Git CLI) y orientado para principiantes en esto de Git, que buscan facilidad y no tanto "lío" o "vueltas". Aunque si estas cómodo con SVN podes usarlo ([ver clientes en GitHub](https://help.github.com/articles/support-for-subversion-clients)).

Abreviaciones y otros vocabularios:

<dl>
<dt><dfn>git CLI</dfn></dt>
<dd>El Git que usas en una terminal/linea de comandos.</dd>

<dt><dfn>GW</dfn></dt>
<dd><a href="http://windows.github.com/">GitHub for Windows</a>.</dd>

<dt><dfn>Tortoise</dfn></dt>
<dd>TortoiseGit.</dd>

<dt><dfn>Server</dfn></dt>
<dd>Donde se "hostean" las cosas (como GitHub). En Git esto no existe, pero asi se entiende mejor para los principiantes (repositorio remoto).</dd>
<dd>"Central server" si venis desde SVN. </dd>

<dt><dfn>repo</dfn></dt>
<dd>Para hacerla más fácil, mirar "repo" como "repositorio principal/remoto" o "server" (ver definición).</dd>

<dt><dfn>origin</dfn></dt>
<dd>Así se denomina al "repositorio remoto" original y por convención el repositorio centralizado 'primario'.</dd>

<dt><dfn>c-p</dfn></dt>
<dd><code>commit</code> seguido de <code>push</code></dd>
</dl>


Programas para Windows
-----------------------

En un principio, tener Git en Windows era mucho lio (porque fue creado por y para Linux) pero ahora hay varias opciones. Usualmente, si vas a usar solo GitHub, se recomienda GW. Pero si queres usar Git para otras cosas (como crear "servers" localmente y jugar ahi) recomiendo [TortoiseGit](http://tortoisegit.org/) + [msysgit](http://msysgit.github.io/) (git CLI) en lugar de GW:

1. te sirve para varias cosas y no solo para GitHub ("lee" el protocolo ``github://``)
2. no tenes que pelear con el PATH por si queres usar git CLI (se instala en ``%appdata%`` y no podes añadir solo ``bin\``)
3. msysgit viene con "git Bash"; una CLI re linda con colores que además te muestra en qué ``branch`` estas; ademas de personalizarla con ``.bashrc``.

![muestra de git Bash personalizado](/images//2014/git_bash.png)


Crear repositorio
-----------------

En GitHub, crear un repositorio con el nombre que se quiera. Podes iniciar sesión e ir a <https://github.com/repositories/new> o apretando en el "<kbd>librito</kbd>".


"Activar" GitHub Pages
----------------------

Se activa magicamente creando un ``branch`` llamado ``gh-pages``.

Desde web es apretando en <kbd>branch master</kbd>; en GW es apretando arriba donde dice <kbd>master</kbd>. Buscar <kbd>gh-pages</kbd> y apretar opción de crear (<kbd>create branch</kbd>). Con CLI sería (previamente clonado, mirar abajo):

	$ git checkout --orphan gh-pages    # branch local


!!! info
	El ``--orphan`` crea un ``branch`` separado del resto del repo (sin *parents*). Se crea primero localmente, después se manda al ``origin`` (pasos mas abajo).


Pasarlo al desktop (para trabajar)
--------------------------------

Desde GitHub apretar <kbd>Clone in desktop</kbd> (que lo tomará GW o Tortoise) o desde CLI:

	$ git clone https://github.com/user/repo_lindo.git


Preparar branch gh-pages
----------------------------

Cambiar a ``gh-pages``. En CLI, si se usó el comando anterior (``git checkout --orphan gh-pages``) se cambia automáticamente, sino ``git checkout -b gh-pages`` para cambiar y crear un ``branch`` local llamado "gh-pages".


!!! info
	Al cambiar *branches*, Windows Explorer "refresca" la carpeta donde está con el contenido del ``branch`` seleccionado.

Eliminar todos los archivos que aparezcan (porque son del ``master`` y no los queremos) y hacemos c-p.

	$ git rm -rf .                      # eliminamos todo
	$ git commit -m "Iniciar gh-pages"
	$ git push -u origin gh-pages       # mandamos branch al origin


gh-pages como default y eliminar master
-----------------------------------------

Esto es opcional, depende de tu *workflow* o idea de uso. Si solo se va a usar ``gh-pages``, se puede usar como default y eliminar el ``branch`` ``master``.

Para ponerlo como default (y no usar el ``master``), en GitHub, ir a <kbd>settings \> (settings \>) Default branch</kbd> y seleccionar <kbd>gh-pages</kbd>.

Para eliminar el ``master`` hay que tener el ``gh-pages`` como default. Después ir al listado de *branches* y apretar en <kbd>Delete branch</kbd>. Con CLI:

	$ git branch -d master     # eliminar local
	$ git push origin :master  # eliminar de repo


It's alive! (Archivo de prueba y subida)
-----------------------------------------

Crear un ``index.html``, lo añadimos y hacemos c-p.

	$ git add .                   # añade todo
	$ git commit -am "Primer commit a pages"
	$ git push origin gh-pages

(el ``-a`` es abreviatura de ``add``)

Esperar unos minutos y ver si se subió el ``index`` en: <kbd>http://user.github.io/projectName/</kbd>


Dominio propio
---------------

Como seguramente no vas a querer entrar a <kbd>http://user.github.io/projectName/</kbd> porque es muy largo o queda poco profecional, GitHub permite ponerle un dominio/subdominio.

Solo basta con poner un archivo ``CNAME`` que contiene el dominio/subdominio que se quiera usar, en el root de ``gh-pages`` y cambiar los DNS del dominio en el host/registrar:

* Con un root domain (www.example.com): crear un nuevo ``A record`` con la IP a <kbd>204.232.175.78</kbd>.

* Con un subdominio (sub.example.com): crear un ``CNAME record`` que apunte al subdmonio del usuario en GitHub (<kbd>user.github.io</kbd>). Esto deja que los DNS se adjusten automáticamente al IP de GitHub; se puede usar un ``A record`` pero no se adjusta automáticamente.


404 pages! (Todos amamos los error pages)
-----------------------------------------

También es fácil: poner un ``404.html`` en el root de ``gh-pages`` y listo (no te olvides de agregarlo y c-p).


<section id="changes">

<h2>Cambios</h2>

<ol>
<li><time>2014-01-02</time> Reescrito para ser mas explicativo.</li>
</ol>

</section>