.. title: NetBeans: problemas con el menú
.. date: 2009-08-22
.. category: solved
.. tags: java
.. lang: es
.. slug: netbeans-problemas-menu

Si tenes el NetBeans (u otro programa de Java, bajo Windows), lo inicias y tenes unos caracteres raros/extraños que no son de un idioma, como:

![Problema del menu en programa](/images/2009/netbeans01.jpg)

Se arregla sólo cambiando el *Look & Feel*:

![Problema del menu resuelto](/images/2009/netbeans02.jpg)

Y parece que solo da problemas el *Look and feel* de GTK (``com.sun.java.swing.plaf.gtk.GTKLookAndFeel``)

## Cómo se arregla

1.  Ir a la carpeta de instalación del NetBeans. (ejemplo: ``C:\Archivos de programa\Netbeans``).
2.  Entrar a la carpeta ``etc``.
3.  Abrir el archivo ``netbeans.conf``.
4.  Por la linea 6 aproximadamente (donde dice
``netbeans\_default\_options``, el primero), poner antes de cerrar la ``"``: ``--laf
javax.swing.plaf.metal.MetalLookAndFeel``
5.  Guardar y cerrar.
6.  Reiniciá la IDE.

``MetalLookAndFeel`` no es el único que funciona, también podes usar "Nimbus" con: ``com.sun.java.swing.plaf.nimbus.NimbusLookAndFeel``:

![Muestra de skin](/images/2009/netbeans03.jpg)

Fuente: [Sun blogs](http://blogs.sun.com/netbeansphp/entry/how_to_change_look_and)


<h3> Comments </h3>

<div id="comments">

<ol class="commentlist">
<li class="comment even thread-even depth-1" id="li-comment-103">
<div id="comment-103">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/a7365cb580a32f88c276cab521f7a84d?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />      <cite class="fn">Luxiano</cite> <span class="says">says:</span>   </div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
August 24, 2009 at 3:39 pm   </div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Que paciencia que tenés :P</p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="comment odd alt thread-odd thread-alt depth-1" id="li-comment-104">
<div id="comment-104">
<div class="comment-author vcard">
<img alt='' src='http://1.gravatar.com/avatar/5ebd81318e7abfbd688508fb6d46f802?s=40&amp;d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />      <cite class="fn"><a href='http://blog.quinzi.com.ar/' rel='external nofollow' class='url'>A.Q.</a></cite> <span class="says">says:</span>    </div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
August 25, 2009 at 10:51 am<  </div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>Programar=paciencia :P </p>
</div>

</div><!-- #comment-##  -->

</li>
<li class="comment even thread-even depth-1" id="li-comment-105">
<div id="comment-105">
<div class="comment-author vcard">
<img alt='' src='http://0.gravatar.com/avatar/a7365cb580a32f88c276cab521f7a84d?s=40&amp;d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&amp;r=G' class='avatar avatar-40 photo' height='40' width='40' />      <cite class="fn">Luxiano</cite> <span class="says">says:</span>   </div><!-- .comment-author .vcard -->

<div class="comment-meta commentmetadata">
August 25, 2009 at 2:35 pm    </div><!-- .comment-meta .commentmetadata -->

<div class="comment-body"><p>En serio? yo siempre me desespero :P </p>
</div>

</div><!-- #comment-##  -->

</li>
</ol>


</div><!-- #comments -->