$(document).ready(function(){
	
	$('.filter').hide();
	$('.subCategorie').hide();
	$('#filterButton').css('height', 20).on('click', function(){
		$('.filter').toggle();
		$('.subCategorie, .subCategorieStudierichting, .subCategorieStudiejaar').hide()
		
		$('.#categorie').on('click', function(){
			$('.subCategorie').toggle();
		});
	});	

});