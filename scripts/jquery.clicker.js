$(document).ready(function() {

	let $c_positive = 'tup';
	let $c_negative = 'tdn';
	let $selector;
	var $ammount;
	var $url;

	$( "a."+$c_positive+", a."+$c_negative ).click(function( event ) {
		event.preventDefault();

		$url = $(this).attr('href');


//$.get( "/"+$url, function( data ) {

//});

		$selector = ($(this).hasClass($c_positive))? 'vote1_1':
			    ($(this).hasClass($c_negative))? 'vote1_2':'';

		$ammount = $(this).parent().find('#'+$selector).text();
		$ammount_substr =  $ammount.substring(1,$ammount.length-1);
		if(isNaN($ammount_substr) | ($ammount_substr.length)==0)
			$ammount_substr = 0;

		$total = parseInt($ammount_substr) +1;

		$(this).parent().find('#'+$selector).text('('+$total+')');
	});
});
