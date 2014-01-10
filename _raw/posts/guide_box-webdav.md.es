.. title: Box: acceder por WebDAV
.. lang: es

[TOC]

Acceder por [WebDAV](http://en.wikipedia.org/wiki/WebDAV) a servicios de sincronización para verlos en tu explorador de archivos sin tener que instalar el cliente -> esperar a que inicie -> indexe -> haga la sincronización solo para sacar un archivo[^1], es priceless[^priceless].

[^1]: por que la gente, a veces, lo usa como servicio de hosting (además del de sincronizar)
[^priceless]: literalmente. Actualmente, los sistemas opertivos lo traen de fábrica (mas, menos o nulo buggeados)

Me aventuré con esto por que quería hacer un proyecto donde necesitaba un FTP. Ultimamente (o siempre fue así), no te dan la opción de hacerte cuenta de FTP, solo creando un sitio. Not interested. No tengo un server/computadora (es un pendiente) para hacerla server e instalarle [FileZilla](https://filezilla-project.org). Damnit. Me acordé de los servicios de sincronización/host de donde tengo cuenta y me aventuré.

*[FTP]: El coso "viejo"

Elegí [Box](http://www.box.com). Pensaba subir los archivos por web, ya que la sincronización es media-media en ese servicio, pero recordé que [SugarSync](https://www.sugarsync.com/) tiene el "SugarSync Drive", donde podes acceder a tu cuenta con el explorador de archivos. Me puse a buscar si Box tenía la mismo o similar.

Tiene para acceder por FTP, pero solo en cuentas pagas. Después leí sobre WebDAV. Intenté configurarlo y, luego de pelear por bastante tiempo, acá está cómo hacerlo en Windows (7).

## Windows Explorer

En "Equipo" (el viejo "Mi PC"), ir a <kbd>Conectar a unidad de red</kbd>

![Menú contextual](/images/2013/webdav_mapnetwork_es.png)

Seleccionar el disco (que no importa mucho parece), tildar <kbd>Conectar de nuevo al iniciar sesión</kbd>. Clickear en <kbd>Conectarse a sitio web para usarlo como almacén...</kbd>

![Ventana de configuración](/images/2013/webdav_mapnetwork_config_es.png)

En la ventana que aparece, seleccionar <kbd>Elegir una ubicación de red personalizada</kbd>

![Ventana de configuración](/images/2013/webdav_mapnetwork_location_es.png)

Ahora lo divertido y lo que me dió dolores de cabeza: la dirección.

![Ventana de configuración](/images/2013/webdav_mapnetwork_address_es.png)

Se puede poner:

* Para toda la carpeta/cuenta: ``https://dav.box.com``
* Para carpeta especifica: ``https://dav.box.com/dav/CARPETITA``

Sale la ventana de log in. Poner nombre de usuario/e-mail de Box y la contraseña.

Opcional, en la siguiente pantalla renombrar ahora la etiqueta:

![Ventana de configuración](/images/2013/webdav_mapnetwork_name_es.png)

Y listo, asi queda:

![Mostrando disco agregado](/images/2013/webdav_networks_computer.png)

Si no te funciona, podes usar [CarotDAV](http://rei.to/carotdav_en.html) (que es para "unir" varios servicios en un mismo programa portable), el famoso [Total Commander](http://www.ghisler.com/download.htm) o BitKinex.

## BitKinex

[Descargar BitKinex](http://www.bitkinex.com/download). Instalar normalmente, pero recomiendo (por que leí) destildar el "I want to configure data source now" por que parece que no hace nada).

Una vez iniciado (si, aparece asi chiquito por alguna razón), buscar en la lista el Http/WebDAV, <kbd>right click > New > Http/WebDAV</kbd> e ingresar nombre.

![Creando servicio](/images/2013/webdav_bitkinex_new.png)

Poner datos similares de los de arriba: ``dav.box.com``, seleccionar <kbd>SSL</kbd>. Poner usuario y contraseña en el apartado de abajo:

*[SSL]: Seguridad ante todo

![Ventana de configuración](/images/2013/webdav_bitkinex_server.png)

También lei (opcional) que se puede poner un path al Site map (no se para qué, no noté diferencia). Se configura yendo a <kbd>Site Map</kbd> (debajo de donde estas ahora/Server) y agregando/modificando el path con ``/dav``, eligiendo <kbd>Directory WebDAV-compliant</kbd>

![Ventana de configuración](/images/2013/webdav_bitkinex_sitemap.png)

Y listo, solo falta hacerle doble click a la conexión y tenes los datos:

![Servicio añadido](/images/2013/webdav_bitkinex_connection.png)

Fuente: [Box zendesk](https://box.zendesk.com/entries/21534903)