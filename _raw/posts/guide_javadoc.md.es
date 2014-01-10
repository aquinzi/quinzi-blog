.. title: Crear Javadoc
.. date: 2009-11-24
.. category: guide
.. tags: java
.. lang: es
.. slug: javadoc

Un Javadoc es un generador de documentación para API en HTML. Para los demás mortales: esa
información que sale al escribir algun nombre de una
variable/objeto/método seguido de un punto, seleccionando después el
método que se quiere.

Estaba buscando por ahí cómo hacer eso pero con mis propios
métodos/atributos/variables/objetos porque vamos, poner nombres super descriptivos y
recontra super largos no da, pones cortos que más o menos te guien pero
después de unos días ni sabes que hacen por ser algunos parecidos.

Un poquitito de búsqueda [dió este resultado](http://www.ehow.com/how_2094987_create-javadoc-commenting.html), cual lo transcribo y le
pongo un par de imágenes para guiarlos ademas de un par de ejemplos.

Localizar lo que se quiere que tenga una explicación, yo voy a usar un
método pero puede ser una variable/objeto. Situarse sobre el nombre de
tal. Comenzar un comentario (``/**``) y den <kbd>enter</kbd>. Puede ser que les ponga algo por default, como los parámetros de un método. Acá se se escribe lo que se quiere, pongo algo de ejemplo:

~~~~~~~~~~~~~~~~~~~~~~~~~.java
/**
* Hola que tal, soy una explicacion
* @since 1.0
* @param pl vector que se separa
* @param direccion no me acuerdo para que era
*/
~~~~~~~~~~~~~~~~~~~~~~~~~

Nótese que al poner ``@`` se despliegan un par opciones, pero no creo que se necesiten mucho.

Ahora van a x lugar, empiezan a tipear y:

![Javadoc tooltip](/images/2009/javadoc01.gif)

Qué lindo no? Ahora no tienen que estar adivinando qué hace,
qué retorna (si es ``true-false`` para hacer algo que no tiene que ver con
verdadero-falso).

Para los atributos/variables es lo mismo. No sé para qué puede servir
pero si le pones nombres genéricos del estilo "a", "b", "foo1", "foo2",
"foodos" y por el estilo, sirve.

![Javadoc Tooltip para variables](/images/2009/javadoc02.gif)

