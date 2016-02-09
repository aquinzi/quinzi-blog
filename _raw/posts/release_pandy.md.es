.. title: pandy
.. lang: es

[pandy](http://aquinzi.com/es/projects/pandy.php) es un wrapper para [pandoc](http://johnmacfarlane.net/pandoc/) + cositas copadas (si usas markdown -> html)

Basicamente toma un archivo/carpeta, de qué convertir y a qué convertir, y lo corre por pandoc.

Uso
--------

Para usar el script, solo llamalo con algo asi:

	pandy source format_from format/s_to [other options]


Caracteristicas
---------------

* Sintaxis un porquito mas facil para los comandos de pandoc
* Carpeta de output manteniendo o no la estructura
* La fuente puede ser un archivo, una carpeta o un .list que contenga las rutas a los archivos
* Formatos: algunos se puede abreviar (mirar abajo)
* Formato de salida: se pueden poner más de uno! solo separalo con espacios.
* Podes crear un librito re lindo (html, solo añade navegación entre archivos). Si no te gusta/queres el "Next-Prev", podes usar los titulos de archivo. Crea un lindo y simple index o incluí el tuyo.
* Usa un archivo de configuración: así no tenes que acordarte de todos los argumentos o escribir un "wrapper" para un script "wrapper" :)
* Soporte para ``[TOCME]``. Significa que el archivo que lo tenga, va a tener TOC. No mas eso de separar archivos con TOC, los que no tienen y finalmente ponerlos en una carpeta.
* Si usas markdown y convertis a HTML hay cositas lindas para vos: abbreviations (de las verdaderas, no como esas que son ignoradas por pandoc) y admonitions.
* "WikiLinks" para tu index!


Para más información y explicación, ir a la [página de proyecto de pandy](http://aquinzi.com/es/projects/pandy.php).