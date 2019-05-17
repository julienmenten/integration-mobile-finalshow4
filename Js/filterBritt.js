$(document).ready(function(){
	$('#accordion').hide();
	$('#filterButton').on('click', function(){
		$('#accordion').toggle();
		$( function() {
			$( '#accordion' ).accordion({

				heightStyle: "content",
				selected:false,
				collapsible: true,
    			"active": false
			});
	
		});

	});
	
	
		
});
