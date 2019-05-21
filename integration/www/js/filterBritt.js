$(document).ready(function(){
/*	$.ajax({
		url:'json/projecten.json',
		method: 'GET',
		dataType: 'json'
	}).done(function(data){
		console.log('json');
		for(var projecten in data){
			var projectNaam = data.projects.naam;
			var auteursNaam = data.projects.auteur;
			
			var divOpen= '<div><p>'
			var divClose = '</p></div>'
			var br = '<br>'
			$('a').append(divOpen + projectNaam + br + 	auteursNaam + divClose);
		}
	});
	*/
	
	$('#accordion').hide();
	$('#filterButton').on('click', function(){
		$('#accordion').toggle();
		$( function() {
			$( '#accordion' ).accordion({
				"heightStyle":"content",
				"selected":"false",
				"collapsible":"true",
    			"active":"false"
			});
	
		});
		
	/*	$('#eindwerk').on('click', function(){
			$('#accordion').hide(300);
			$.ajax({
				url:"json/projectn.json",
				method: "GET",
				dataType: "json"
			}).done(function(data){
				for(var eindwerken in data){
					var categorie = data.projects.categorie; 
					var projectName = data.projects.naam;
					
					
				} 
				
			});
		})
	*/
	});

	
		
});