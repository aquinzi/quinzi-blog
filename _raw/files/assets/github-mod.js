$(document).ready(function(){
	// change order
	$(".gist-meta").insertBefore(".gist-syntax");
	
	// links in meta:
	//var linkRaw = $('.gist-meta a').get(0);
	var linkFile = $('.gist-meta a').get(1);
	
	var linkRaw =  $('.gist-meta a').attr('href') ; //magically gets the first link
	/* var splitted = linkRaw.split('/');
	var fileName = splitted[7];
	regex:
	.+/(.+)
	or with replace: .+/  	*/
	
	var fileName = linkRaw.replace(/.+\//g,'');
	
	// modify meta:
	$('.gist-meta').html('<span>'+fileName+'</span><span class="github">Thank you <a href="http://www.github.com/">GitHub</a>!</span><a href="'+linkRaw+'" style="float:right">File</a><a href="'+linkFile+'" style="float:right; margin-right:10px; color:#666;">Gist</a>');

	//codehilite y/o highlight 
	//	style, remove css embebed
	$('link').remove(":contains('embed-')");
	
	//	change clases:
	/*$('div.gist-data').attr('class', 'gist-data codehilite');*/
	$('div.gist-data').attr('class', 'codehilite highlight');
	$('pre.line-pre').attr('class', 'line-pre codehilite highlight');

});