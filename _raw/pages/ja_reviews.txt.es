---
.. title: Review de recursos para japonés
.. date: 2014-02-09 
.. updated: 2014-01-11
.. slug: japanese-resources
.. lang: es
.. description: Recursos variados (programas, libros, etc) para aprender/practicar japonés, centrados en el aprendizaje por cuenta propia y/o por ser la primera vez que se hace. Incluye un par de opiniones/tips.
---

[TOC]


Programas, addons, plug-ins
-----------------------------

### SRS 

No matarse con el programa. Sirve para reveer/repasar las cosas y no para estudiar (aunque algunos lo hacen para eso). Solo usarlo por unos minutos y ya. Aprenderse las palabras/oraciones **fuera** del programa: textbooks, audio, peliculas, textos varios, etc.

Para los principiantes sirve bastante por tener falta de textos de nivel, poco vocabulario y gramática. A medida que se avanza, ir decrementando el uso y hacer más lectura/escucha


#### Anki

<div class="appinfo">
Sitio
:	<http://ankisrs.net/>

Plataforma
:	Multiplataforma. 

Código
:	Abierto

Almacenamiento
:	SQLite

Clientes
:	desktop, smartphones, web 
</div>

  * Bastante popular. 
  * Muchos plugins y decks. 
  * La comunidad es bastante centrada a japonés. 
  * Sincroniza con Ankiweb. 
  * Bastante flexible y personalizable. 
  * Incluye gráficos/estadísticas.


#### Mnemosyne
<div class="appinfo">
Sitio
:	<http://mnemosyne-proj.org/>

Plataforma
:	Multiplataforma. 

Código
:	Abierto

Almacenamiento
:	SQLite

Clientes
:	desktop, [android](https://play.google.com/store/apps/details?id=org.tbrk.mnemododo), "web" (activar el webserver), teléfonos con J2ME
</div>

  * No tan popular, pero está hace mucho tiempo
  * Es mas genérico que Anki. 
  * Tiene decks y plugins compartidos. 
  * Incluye gráficos/estadísticas. 
  * Sincronización por dispositivos (sin web, un dispositivo funciona como servidor).

  
### Diccionarios

#### Tagaini Jisho

<div class="appinfo">
Sitio
:	<http://www.tagaini.net/>

Plataforma
:	Multiplataforma. 

Código
:	Abierto

Almacenamiento
:	SQLite
</div>

  * Es un diccionario + buscador de kanji + herramienta/asistente de aprendizaje. 
  * Permite taggear, ponerle notas a las entradas y organizarlas en listas.
  * Tiene un sistema de flashcards (no SRS) que colorea las entradas en base al puntaje de aprendizaje (de rojo a verde).
  * Sistema de exportación básico en TSV (para Anki) y hacer un booklet.

Contras:

  * No se pueden buscar entries en las listas. Ej: no se puede seleccionar una lista y buscar ahi X palabra/kanji.
  * No se puede separar los kanji estudiados del vocabulario (sale todo junto)
  * Solo se puede exportar la palabra, pronunciación y definición. Las notas aparecen cuando se hace el booklet. Las tags y listas no se pueden exportar. 
  
 
#### Rikai-family

Son diccionarios popup para navegadores. 

  * Firefox, Thunderbird, Seamonkey: [rikaichan](https://addons.mozilla.org/en-US/firefox/addon/rikaichan/) o [rikaisama](http://rikaisama.sourceforge.net/) fork que agrega audio, mas diccionarios, frecuencia de palabras, pitch accents, exportación/guardado avanzado, exportación a Anki, indicar palabras que se sepan/queres aprender, y mas.
  * Chrome: [rikaikun](https://chrome.google.com/webstore/detail/rikaikun/jipdnfibhldikgcjhfnomkfpcebammhp)
  * Opera 12/legacy: [Rikaisan](https://addons.opera.com/en/extensions/details/rikaisan/)
  
#### JED 

<div class="appinfo">

URL
:	<https://play.google.com/store/apps/details?id=com.umibouzu.jed>

Plataforma
:	Android. 

Ads
:	No

</div>


Diccionario offline. Parece que no se actualiza mas.

  * Buscar mientras se tipea (lecturas, significado). 
  * Se puede buscar en romaji y kana/kanji. 
  * Japonés a varios idiomas (inglés, español, francés). 
  * Tags. 
  * Exportar a GDocs o Anki. 
  * Copiar a clipboard. 
  * Oraciones de ejemplo. 


### Práctica

#### Obenkyo

<div class="appinfo">
URL
:	<https://play.google.com/store/apps/details?id=com.Obenkyo>

Platform
:	Android. 

Ads
:	Si: Ads y Analytics pero se pueden deshabilitar desde opciones. 
</div>


Programa para practicar/aprender kana, kanji y vocabulario (incl. números). 

  * Kanji: 2300+ (nivel JLPT 1-5 o Jouyou 1-7), animación de trazos, lecturas. Flashcards/escribiendo.
  * Vocabulario: 14600+ (en inglés) de EDICT con flashcard .
  * Particulas: experimental (cerca de 100 oraciones)
  * Tae Kim Japanese Grammar guide. 

### OCR

#### Capture2text

<div class="appinfo">
Sitio
:	<http://capture2text.sourceforge.net/>

Plataforma
:	Windows

Código
:	Abierto
</div>

  * Permite OCR desde varios idiomas (viene por default con japonés, inglés, francés, chino, alemán y español)
  * Tiene Speech recognition via Google
  * Copiar directamente al clipboard, ventana popup, donde se tenga el cursor, a una ventana (ej. Notepad++, Sublime Text)
  * Forma gráfica y via linea de comandos.


#### OCR Manga Reader

<div class="appinfo">
Sitio
:	<https://play.google.com/store/apps/details?id=com.cb4960.ocrmr>

Plataforma
:	Android

Ads
:	No

Código
:	Abierto
</div>

  * Es un lector de comic/manga con OCR para buscar palabras en el diccionario, estilo popup.
  * Formatos: CBZ, CBR, ZIP, RAR, PNG, JPG, BMP
  * Texto en vertical u horizontal
  * El texto con el que se hace OCR puede ir al clipboard, Aedict, AnkiDroid, varios diccionarios online, Google y Google Images.


### Lectura

Programas que ayudan a leer textos: se carga el texto (usualmente .txt) y se van marcando las palabras que ya se conocen o se quieren estudiar y exportarlas. Las palabras que no se sepan se pueden buscar en el diccionario "popup" que tienen, ya sea haciendo click o hover.


#### Yomichan

<div class="appinfo">
Sitio
:	<http://foosoft.net/pages/yomichan.html> o [Anki plugin repo](https://ankiweb.net/shared/info/934748696)

Plataforma
:	Multiplataforma. 

Código
:	Abierto
</div>

  * Plugin para Anki
  * Tiene búsqueda de diccionario incluido (EDICT, KANJIDICT). 
  * Bastante cómodo si se guardan las oraciones/vocabulario a Anki. Además tiene para copiar al clipboard.
  * No marca cuales palabras ya se saben.
  * Solo para japonés.


#### LWT (Learning with Texts)

<div class="appinfo">
Sitio
:	<http://lwt.sourceforge.net/>

Plataforma
:	Multiplataforma 

Código
:	Abierto
</div>

  * Se instala en un servidor con PHP y MySQL
  * Para varios idiomas. 
  * Se tiene que configurar los diccionarios a usar (tiene un par incluídos) y aparece como popup. 
  * Página de estadísticas. 
  * Exportación en TSV de palabras y expresiones. 
  * Importar palabras que se sepan en CSV/TSV. 
  * Marcado de palabras que se saben o no, por grado (marca con colores)


#### fltr (Foreign Language Text Reader)

<div class="appinfo">
Sitio
:	<https://code.google.com/p/fltr/>

Plataforma
:	Multiplataforma 

Código
:	Abierto
</div>

  * Como LWT pero en Java y archivos planos.
  * No tiene diccionario incluido (abre el navegador con el diccionario asignado). Tiene un par incluídos.
  * Marca las palabras que se saben y las que no (con distintos colores por grado)
  * Exportación en TSV. 
  * Se puede importar/cargar un CSV con las palabras que se saben para que las marque como sabidas o cargar un texto y poner "I know all of them"
  * Para varios idiomas. 
  * Estadísticas básicas
  * El logo es un <span title="maneki neko" lang="ja">招き猫</span>


Textbooks 
-------------

### Kana 

**Cualquier libro para aprender kana no lo vale**. 

  * No son muchos: 48 hiragana y 48 katakana "oficiales"
  * El vocabulario que te enseñan se pueden aprender con otro textbook. 
  * Es mejor aprenderlos escribiendolos/memorizandolos con SRS/Flashcards (o ambos). 
  * Son pocos + se usan bastante = se aprenden rápido.
  * Si se usa un textbook, se aprenden tranquilamente con él.
  

### Kanji 

#### Remembering the Kanji

<div class="appinfo">
Método
:	Mnemónica

Kanji totales
:	2042 kanji, incluyendo los del <span title="jouyou kanji" lang="ja">常用漢字</span> + 965 del tercero, totalizando 3007

Vocabulario
:	Si

Ejercicios
:	Si
</div>


  * Más que nada se puede usar para **perderle el miedo a los kanji** y no asustarse al ver uno con muchos trazos
  * Los kanji se presentan "construyendose en bloques" (se aprende A y B primero, antes de aprender D).
  * No enseña las lecturas (eso va en el 2). El 3 tiene un par de kanji que, si se consigue la versión nueva (6ta), no sería tan necesario, ya que tiene kanji que no se usarán/verán mucho). 
  * No tan recomendado si no interesa la parte de la escritura pura (podes aprenderte las reglas básicas, que servirán para la mayor parte).
  * No todos los caracteres tienen historias, a partir de la mitad hay que crearselas uno.


Se recomienda (si se tiene versiones anteriores a la 6ta): [eliminar kanji no necesarios](http://japaneselevelup.com/2011/08/03/filtering-out-remembering-the-kanji-flaws-1-500/) de las versiones 1 y 3 o [bajarse el deck de anki](http://japaneselevelup.com/2011/09/04/japanese-level-up-rtk-mod-anki-deck/).

#### Kanji Damage

<div class="appinfo">
Método
:	Mnemónica

Kanji totales
:	1,700 kanji de manera "graciosa" ("Yo Mama jokes")

URL
:	<http://kanjidamage.com/>

Vocabulario
:	Si

Ejercicios
:	No
</div>


  * Alternativa a RTK 
  * Ayudas para distinguir kanji similares
  * Lecturas
  * Se aprenden con radicales
  

#### Smart Kanji Book

<div class="appinfo">
Método
:	Mnemónica

Kanji totales
:	732 kanji más importantes/populares. 

URL
:	<http://smartkanjibook.com/> 

Vocabulario
:	Si

Ejercicios
:	No
</div>


  * Alternativa a RTK
  * Imagenes mentales "variadas y chistosas" y todos los caracteres tienen. 
  * Hay un [free sample](http://smartkanjibook.com/wp-content/uploads/2013/11/free_sample.pdf) de 140

  
#### Basic Kanji Book

<div class="appinfo">
Método
:	Repetición: escribir X veces. 

Kanji totales
:	500 (ambos vols.)

Vocabulario
:	Si

Ejercicios
:	Si
</div>

  * Aprender kanji con su lectura y orden de trazos 
  * Explica un poquito la gramática
  * En los kanji básicos muestra la imagen de donde se basó el kanji.

  
#### Kanji in MangaLand

<div class="appinfo">
Método
:	Mnemónica

Kanji totales
:	240 en el primero

Vocabulario
:	Si

Ejercicios
:	Si
</div>


  * El "Remembering the kanji" pero orientado al manga: tiene el "dibujo" explicando el kanji, la historia asociada para que te acuerdes y orden de trazos
  * Lista kanji parecidos y lectura
  * Vocabulario; pero como esta orientado al manga, tiene palabras "fantasiosas".


  
#### Kanji De Manga

  * Parecido al anterior pero "mas pobre". 
  * Muestra el kanji y el orden de trazos
  * Vocabulario 
  * Incluye pequeña viñeta con diálogo que usa ese kanji.
  * Saltearlo, no lo vale.
  
  
### Gramática 


#### Japanese in Mangaland/Japonés en viñetas 1

  * Sirve para una **entrada general al idioma** o acompañamiento de una clase u otro textbook (aunque no creo que lo valga). 
  * Se detallan cosas básicas como escritura, saludos, las conjugaciones, un poco de vocabulario (con kanji), notas culturales y demas, con viñetas dibujadas para dar ejemplos. 
  * El vocabulario, al ser orientado al manga, habrá cosas de no tan uso cotidiano
  * Algunos errores de tipeos y humor cursi. 
  * Tiene un workbook (el primer libro) que no es muy "bonito" (centrado en manga y simple). 
  * 160 kanji
  * Es bueno para aprender el japonés "informal" 

  
#### Genki (1, primera edición)

  * Textbook para centrarse en la gramática y vocabulario básico. 
  * Para principiantes y va muy bien. 
  * Tiene listening y un workbook. 
  * El libro sirve bastante para los que estudian por su cuenta, aunque tiene ejercicios para hacer grupales. 
  * Tiene vocabulario centrado en el ámbito escolar y algunas palabras "viejas".
  * La historia es de Mary como estudiante en Japón y su vida colegial ahí.
  * "Muchas voces" en los listening (como 3-4 para la parte de japonés); esta inglés basicamente: esto puede ser bueno en un principio, pero estaria bueno que vaya sustituyendo a medida que pasan los capitulos
  * En el workbook, algunas veces en el listening, hay que responder en inglés.

La segunda edición contiene un par de mejoras: como la eliminación de palabras "obsoletas" (video casette, vhs, cinta de audio), agrega notas culturales, etc.

#### Japones con Yumiko

  * Ni molestarse. 
  * Lo unico que puede servir es la guía de viaje que se puede conseguir de otros lados.
  

Otros recursos 
---------------

### The Great ChokoChoko Library

<https://chokochoko.wordpress.com/the-great-library/>

Textos para practicar lectura dependiendo del nivel JLPT que tengas. Recomendado.


### Guía práctica de conversación: español - japonés

  * Es una guía rápida, solo tiene gramática básica y mucho vocabulario. 
  * No está mal para la parte de vocabulario/oraciones
  * El romaji es "españolizado"
  * Tiene errores tanto en el romaji, kanji, pronunciaciones, etc. 
  * También parece que el diccionario de atrás no está completo con todas las palabras utilizadas anteriormente. 
  


<section id="changes">

Cambios
---------

  #. <time>2014-02-11</time> Añadido OCR.

</section>