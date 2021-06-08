$(document).ready(function() {

	let $c_positive = 'tup';
	let $c_negative = 'tdn';
	let $selector;
	var $target;
	var $url;

	function counter($tag,$selector){
		var $ammount, $total ;

		$ammount = $($tag).parent().find('#'+$selector).text();
		$ammount_substr =  $ammount.substring(1,$ammount.length-1);
		if(isNaN($ammount_substr) | ($ammount_substr.length)==0)
			$ammount_substr = 0;

		$total = parseInt($ammount_substr) +1;

		$($tag).parent().find('#'+$selector).text('('+$total+')');
	}

	$( "a."+$c_positive+", a."+$c_negative ).click(function( event ) {
		event.preventDefault();
		$target = $(this);
		$url = $target.attr('href');
		if(($url.length)!=0)
			$url += '&api=1';		

		$selector = ($target.hasClass($c_positive))? 'vote1_1':
			    ($target.hasClass($c_negative))? 'vote1_2':'';

		$.ajax('/'+$url,  
		{
		dataType: 'json', 
		timeout: 500,     // timeout milliseconds
		    success: function (data,status,xhr) {   
		        if(data.status == 'true' ){
		        	counter($target,$selector)
		        }	
		        	console.log(status);
		        	console.log(data);
		    },
		    error: function (jqXhr, textStatus, errorMessage) { // error callback 
		        alert('Error: ' + errorMessage);
		    }
		});
		
	});
});
