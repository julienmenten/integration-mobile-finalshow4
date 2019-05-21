$(document).ready(function(){
	// accordion structure	
	$('#accordion').hide();
	$('#filterButton').on('click', function(){
		$('#accordion').toggle();
		$( function() {
			$( '#accordion' ).accordion({
				heightStyle:"content",
				selected:"false",
				collapsible:"true",
    			active:"false"
			});
	
		});
	
	});
	
	


	
		
	$.ajax({
		url:"json/projectn.json",
		method: "GET"
	}).done(function(data){
		for(var finalWorks in data){
			var eindwerk = projects[data].categorie;
			var categorie1 = projects[data].categorie;
			
			console.log('variabelen na call uitgevoerd');
			
			var eindwerkAfbeelding = $('#afbeeldingen').append('<p>' + eindwerk +'</p>');
			console.log('eindwerkenAfbeelding aangemaakt');
			var categorie1Afbeelding = $('#afbeeldingen').append('<p>'+categorie1+'</p>');
			
			if (eindwerk == 'eindwerken'){
				console.log('eindwerken pressed');
			// if pressed on #eindwerken show eindwerken
				$('#eindwerk').on('click', function(){
				$('#accordion').hide();
				$('#afbeeldingen').hide();
				$('#afbeeldingen').show(eindwerkAfbeelding);
				
			});
			
			//if (categorie1 == 'categorie1'){
				
			//}
		};	 	
	};
	});
	});