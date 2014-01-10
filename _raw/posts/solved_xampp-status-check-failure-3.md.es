.. title: XAMPP: Status Check Failure [3]
.. date: 2011-05-31
.. category: solved
.. tags: xampp, windows
.. lang: es
.. slug: xampp-status-check-failure-3

Un día, al actualizar [XAMPP][] (el cliente de desarrollo que uso), empezó a tirar un "Status Check Failure [3]" al iniciar. Era medio molesto el mensaje por más que los servicios siguieran andando.

Busqué vaias soluciones, algunas decian que era el puerto ocupado y que
lo usaba Skype. Skype no tengo. Otros decian que era el instalador, que
no funcionaba con Windows 7 64 bits, pero aún descargando el archivo comprimido daba el mismo problema.

La solución fue algo asi:

1. Ir a las ``Variables del entorno`` (<kbd>Equipo > propiedades > configuración avanzada</kbd>)
2. Agregar al ``path`` a XAMPP (ejemplo: <kbd>%SystemDrive%\xampp</kbd>)
3. Buscan el acceso directo del ``xampp-control-panel.exe`` y van a sus propiedades.
4. Borren lo que dice en ``Iniciar en...``

Fuente: [Resolver el error explicado con imágenes en portugués][]

[XAMPP]: http://www.apachefriends.org/
[Resolver el error explicado con imágenes en portugués]: http://www.apachefriends.org/f/viewtopic.php?p=174321#p174507