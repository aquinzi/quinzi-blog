.. title: Windows 7: Arreglar los iconos en Explorer
.. date: 2013-12-12
.. category: solved
.. tags: windows
.. lang: es
.. slug: windows7-shell-icons

Con esta era de usar programitas varios para sincronizar, otros para control de código, y otros que no puedo recordar ahora; es necesario tener los overlay icons en Windows Explorer:

![Ejemplo de iconos de estado](/images/2013/win7_shell_icons.png)

Personalmente se me desaparecían y, aunque limpiara la cache de los programas, nunca aparecían. Hay algunos que podes vivir sin ellos, pero otros no. Capaz instalaste un [programa](https://copy.com?r=hQHBH9) y te desplazó los de [otro](https://www.dropbox.com/referrals/NTYxNzc3MDQ5).

¿Pero cuál es el problema? Que los genios de Microsoft limitan la cantidad de iconos que se pueden usar a unos meros **11 iconos totales para el usuario**. WHAT THE HELL.

Para arreglar el tema hay que pasar por el registro. Entrá al bonito ``regedit`` y navegá hasta ``HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\ShellIconOverlayIdentifiers\``. Antes de tocar mano, hacete un backup del ``.reg``.

La idea es que de los 30 que debes tener, solo elegis los 11 mas importantes. ¿Cómo decidis la importancia? renombrandolos, porque Windows los elige por orden alfabético. Poneles números adelante o "z", "x", "y", esas letras que no se usan. Yo prioricé algunos de TortoiseSVN, un par de [Dropbox](https://www.dropbox.com/referrals/NTYxNzc3MDQ5), y el resto como sea el orden.

Una vez que estás feliz, reiniciá el explorer.exe: <kbd>Administrador de tareas > matar explorer</kbd>[^1]. Después lo inicias en <kbd>Nueva tarea</kbd> (o si queres desloguearte y loguearte, si queres reiniciar también, pero no hace falta).

[^1]: Kill, kill, kill!

Fuente: [oliverpearmain: Dropbox and TortoiseSVN icons overlays in harmony](http://www.oliverpearmain.com/blog/dropbox-and-tortoise-svnsubversion-icon-overlays-in-harmony/)