// JavaScript Document
$(function(){
	var arrow = false;
	$("#openAwardsMenu").on('click', function(){
		$("#awardsMenu ul").slideToggle(200, 'swing');
	})
});

function categorieTonen(cat){
	switch(cat){
		case 'cat1':
			toggleCategory('categorie1');
			break;
		case 'cat2':
			toggleCategory('categorie2');
			break;
		case 'cat3':
			toggleCategory('categorie3');
			break;
		case 'cat4':
			toggleCategory('categorie4');
			break;
		case 'cat5':
			toggleCategory('categorie5');
			break;
		case 'all':
			toggleCategory('all');
			break;
	}
}

function toggleCategory(categorie){
	if(categorie != 'all'){
		$("#awardsList section").hide();
		$("#"+categorie).show();
		$("#awardsMenu ul").slideUp(200);
	}
	else{
		$("#awardsList section").show();
		$("#awardsMenu ul").slideUp(200);
	}
	
}