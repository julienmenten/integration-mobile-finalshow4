$(document).ready(function(){

    $.ajax({
        url: 'json/projecten.json',
        method: 'GET',
        dataType: 'json'
    }).done(function(data){
        makeFavList(data.projects);
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log('always');
    })


    function makeFavList(list){

        for(var i in list){

            var test = localStorage.getItem("ster"+i);
            console.log(test);

            var div = $("<div class='favdiv'>");
            var name = $("<h3>").text(list[i].naam);
            var auteur = $("<h4>").text(list[i].auteur);
            div.append(name).append(auteur);

            if(test == "true"){
                $("#favorites").append(div);
            }

        }

    }

})