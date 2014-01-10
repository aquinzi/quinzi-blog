.. title: foobar2000 theme: Tomorrow Night Bright
.. lang: es

[TOC]

Experimentando con el Default UI de foobar2000, salió este theme muy minimalista/simple con los colores de [Tomorrow theme](https://github.com/ChrisKempson/Tomorrow-Theme) versión Night Bright.


## Screenshots

Se tiene el menu + controles en una misma linea. Debajo, el seekbar + los playlists en un dropdown menu. En el status bar esta el tiempo, rating (vista) y volúmen.

Son cuatro vistas/tabs en total:

"Now" contiene el playlist actual, agrupado por artista (en azul) + album (verde). Los tracks solo muestran su titulo (rojo) y su comentario (naranja).

![Lista de reproducción activa](/images/2013/foobar_tomorrow_now.png)

"Lyrics" tiene el cover art y la letra.

![Panel con letra de canción](/images/2013/foobar_tomorrow_lyrics.png)

"Meta" son los datos del track que se esta reproduciendo.

![Propiedades del tema](/images/2013/foobar_tomorrow_meta.png)

"Library" es la biblioteca.

![Biblioteca](/images/2013/foobar_tomorrow_library.png)

No tiene lista de playlist (solo el dropdown) porque no hay uno que me liste y prevenga el accidental borrado :P. Si necesitas manejarlos, vas a <kbd>View > Playlist Manager</kbd>.

## Requerimientos

- [foobar2000](http://www.foobar2000.org/)
- [EsPlaylist](http://foo2k.chottu.net/)
- [Lyric Show Panel 3](http://www.foobar2000.org/components/view/foo_uie_lyrics3)
- [theme + configuración](http://www.mediafire.com/?qb2v62gt01uzr8h)

Poner la configuración del EsPlaylist (```foo_uie_esplaylist.dll.cfg```) en ```[lugar_donde_esta_foobar]/configuration``` (cosa que no tengas que configurar a mano) y el theme (```tomorrowbright.fth```) donde quieras.

Importá el theme (<kbd>Preferences > Display > Default User Interface > Import theme</kbd>). En el playlist, hace <kbd>click derecho > grouping > inline - Tomorrow night bright</kbd>. En el lyrics, edita el panel (<kbd>panel preferences</kbd>) y pone el ``highlight color`` a RGB ``236,206,88`` (amarillito).

El color de los "separadores" de los titulos (en el playlist, el ``%artist%``, ``%album%``; y en el meta el "metadata", "location", "other"...) esta configurado en <kbd>Default User Interface > Colors and fonts</kbd> (por si no te gusta el violeta).

Si queres poner otros botones de control, necesitas que esten en ``.ico`` de 16x16.

El theme para Windows es [SlanXP2 for 7](http://www.deviantart.com/art/SlanXP-2-0-For-7-134955170), por eso el DUI se ve lindo.