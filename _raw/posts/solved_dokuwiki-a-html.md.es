.. title: Pasar de sintaxis DokuWiki a html
.. date: 2011-06-11
.. category: solved
.. tags: dokuwiki, php, code
.. lang: es
.. slug: dokuwiki-a-html

Para pasar de sintaxis DokuWiki a HTML necesitas poner el siguiente php:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~.php
<?php
if ('cli' != php_sapi_name()) die();
ini_set('memory_limit','128M');
if(!defined('DOKU_INC')) define('DOKU_INC',realpath(dirname(__FILE__).'/../').'/');
define('NOSESSION',1);
require_once(DOKU_INC.'inc/init.php');
require_once(DOKU_INC.'inc/common.php');
require_once(DOKU_INC.'inc/parserutils.php');
$source = stream_get_contents(STDIN);
$info = array();echo p_render('xhtml',p_get_instructions($source),$info);
?>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

en ``dokuwiki\bin`` y tener ``php`` en el ``PATH``.

Para ejecutarlo, solo tenes que llamarlo, con el ``input.txt`` y ``output.html`` que quieras. Ejemplo:

	php path/a/dokuwiki/bin/dokucli.php < input.txt > output.html


Fuente: [Dokuwiki Tips](http://www.dokuwiki.org/tips:dokuwiki_parser_cli)