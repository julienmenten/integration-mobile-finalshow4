$(document).ready(function(){

	console.log('linked');
	
	$.ajax({
		url: 'json/projecten.json',
		method: 'GET',
        dataType: 'json'
	}).done(function(data){;
        makeList(data.projects);
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log('always');
    })
    
    function makeList(list){
        for(var i in list){
            var naam = $("<h3>").text(list[i].naam);
            var auteur = $("<h4>").text(list[i].auteur);
            
            var div = $("<div class='card'>");
            div.append(naam).append(auteur);
            
            $("#afbeeldingen").append(div);
        }
    }
	
	
	$('#accordion').hide();
	$('#filterButton').on('click', function(){
		$('#accordion').toggle("slow");
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
