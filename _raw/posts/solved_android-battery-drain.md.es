.. title: Android: resolviendo el problema de batería
.. lang: es

[TOC] 

## Contexto

Hace un par de semanas tuve estos problemas/**drenajes de bateria** (otra
vez). Normalmente es porque abrí el Google Maps, arreglandose
reiniciando el teléfono; pero recordé de que no lo había abierto.

Reinicié, paré algunas apps que pensaba que eran las culpables pero
nada. Todo pasó después de actualizar algunas apps, asi que *congelé*,
desinstalé, eliminé widgets, etc. No hubo suerte.

Dejé el teléfono para que se estabilizara. Dias pasaron y seguía
cargando todos los dias (cargo día de por medio por el uso liviano). 

De todas los programas que habia actualizado, había una que tenía el
comentario de "drena bateria". Procedí a desinstalar y buscar otra
opción (que es mas de lo que necesito, más feo comparandolo con el
anterior pero mas gracioso y liviano. Se queda pero voy a extrañar a la
almohadita con ojos).

Esa app no era el problema.

El mismo comentario decía cómo el usuario había encontrado que esta
aplicación drenaba la batería. Anoté y busqué. Mostraba que el teléfono
tenia muy mal **deep sleep**. Este estado es muy importante ya que es
cuando el robotito de android está realmente durmiendo y no haciendo
otra cosa (ej. actualizando estados, e-mail... y no lo otro que pensabas,
pervertido).

Gracias, pero el app hace solo eso. Muestra el tiempo en las frecuencias
de CPU, nada mas... hasta que encontré la solución.

## Decime cómo resolver el problema, maldita sea!

Lo que se necesita:

  - teléfono o tablet con problemas (de drenaje) de batería.
  - CPU Spy (posiblemente opcional, BetterBatteryStats tiene esa opción)
  - BetterBatteryStats
  - más de 4hrs sin usar el teléfono pero seguro que menos de 10hrs


### Procedimiento

-   Instalar CPU Spy y BetterBatteryStats. Recordar de cargar el celular
al tope por que vamos a necesitar cada gotita de jugo.
-   Escribi/sacar una captura de pantalla del *homescreen* o lugar donde
se tenga el porcentaje de batería y la hora.
-   Iniciar CPU Spy y resetear los *timers*/relojes
-   Iniciar BetterBatteryStats <kbd>menu \> more \> set custom ref</kbd>.
-   Dejar el teléfono (no se va a sentir solo, creeme) por (por lo
menos) 4hrs (mejor todo una noche) con la pantalla apagada.
-   Olvidarte del teléfono y sali a tomar aire; acariciar a tu mascota,
alimentarla, jugar; hacer ejercicio...


Después de X horas:

Escribir/sacar una captura de pantalla del *homescreen* o lugar donde se
tenga el porcentaje de batería y hora. Calcular cuanto se gastó la
batería por hora: *[batería inicial - batería ahora] / [horas teléfono
dormido]* = xxxx% -\> gasto de batería por hora. Si es cerca de 1%, salí
de acá y disfrutá la vida, sino proseguir.

Ir a CPU Spy y ver el tiempo de deep sleep. Si es (aproximadamente) el
mismo tiempo que el del teéfono durmiendo, todo esta bien, sino
proseguir.

Ahora ir a BetterBatteryStats. En la segunda opción/menú desplegable
elegir <kbd>since custom ref.</kbd>. En la primer opción/menú desplegablé
elegir <kbd>kernel wakelock</kbd>. Si se tiene un uso alto de
``PowerManagerService``, que es un
parámetro de sustitución para todos los *partial wakelocks*, debés
elegir (en la primera opción/menú desplegable) <kbd>Partial wakelocks</kbd>.

Ahí se puede ver qué app se come tu batería. Puede ser por varias
razones asi que no te puedo ayudar. El app que me daba problemas era **SugarSync**. Lo maté (oh no! pobre pajarito D: !) e inicié
nuevamente, ningún problema. No sé qué causaba el prblema de batería
pero ahora parece andar como antes.

Si tenes muchas apps que drenan la batería, *congelá*/desinstalá
de a una. No seas un maniático.

Fuentes/acá podes leer más (inglés):

-   [http://forum.xda-developers.com/showthread.php?t=1308030][]
-   [http://forum.xda-developers.com/showthread.php?t=1878828][]
-   [http://forum.xda-developers.com/showthread.php?t=1179809][]


[http://forum.xda-developers.com/showthread.php?t=1308030]: http://forum.xda-developers.com/showthread.php?t=1308030
[http://forum.xda-developers.com/showthread.php?t=1878828]: http://forum.xda-developers.com/showthread.php?t=1878828
[http://forum.xda-developers.com/showthread.php?t=1179809]: http://forum.xda-developers.com/showthread.php?t=1179809