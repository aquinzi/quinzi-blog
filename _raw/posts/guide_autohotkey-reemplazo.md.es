.. title: AutoHotkey + Reemplazo
.. date: 2009-06-01 15:33
.. category: guide
.. tags: autohotkey
.. lang: es
.. slug: autohotkey-reemplazo

Como había escrito [anteriormente](link://slug/autohotkey-nueva-carpeta), se puede usar tranquilamente el
AutoHotkey para suplantar texto. También existe una app un poco más
simple (y más gráfica) basada en este, que es [Texter](http://www.lifehacker.com/software/texter/lifehacker-code-texter-windows-238306.php), asique depende de tus necesidades, elegí.

El texto se puede sustituir de dos formas: auto-sustisución o mediante
un trigger. Consideraría la primer opción si estuviese tomando notas, o
escribiendo un texto muy largo, por ejemplo.  Por ahora solo me voy a enfocar en la 2º que me
parece más bonita.

Se crea el script y dentro del mismo se coloca (es un ejemplo):

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#Hotstring EndChars `t
:O:c++base::
(
/*
Nombre Programa:
Autor:
Descripción:
*/

#include <cstdlib>
#include <iostream>

using namespace std;

int main( ) {
//Definición de variables
//Comienza Programa
//salida: Pausa de Ventana. Tambien puede ser getche(); llamando a
conio.h -

system("PAUSE");
return EXIT_SUCCESS;
}

)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

La explicación es la siguiente:

  * ```#Hotstring EndChars `t```: nuestro trigger (``tab``)
  * ``:O:c++base::``: la ``O`` sirve para omitir el caracter (tecla) de trigger. En este caso, si no lo pondría, me dejaría un tab después de la sustitución. ``c++base`` es la palabra clave.
  * El primer y último paréntesis indican el inicio y fin del texto con el que se susplantará.
  * Lo que esta dentro de los paréntesis: el texto con el que se susplantará.

Lo ejecutamos y probamos en un editor de texto: escribimos ``c++base`` y seguido presionamos <kbd>tab</kbd>. Se nos tendría que haber sustituido por el texto marcado.

Si queremos hacerlo solamente con una linea (ejemplo: una dirección de
mail), hay que escribir (ademas del primer renglón):

	:O:@mimail::esteesmimailsuperlargoquenoquieroescribir@todoeltiempo.com

Con esto, y si escribis todo el tiempo lo mismo, te puede ayudar a
reducir el tiempo.
