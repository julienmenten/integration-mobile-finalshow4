$(document).ready(function(){

    var favBool = [];
    var jsonProjects;

    $.ajax({
        url: 'json/projecten.json',
        method: 'GET',
        dataType: 'json'
    }).done(function(data){
        jsonProjects = data;
        makeList(data.projects);
        makeDetails(data.projects);
    }).fail(function(a,b){
        console.log(a,b);
    }).always(function(){
        console.log('always');
    })


    function makeList(list){
        for(var i in list){

            for(var j = 0; j < list.length; j++){
                favBool.push(false);
            }

            var div = $("<div class='projectfoto'>");

            var naam = $("<h3>").text(list[i].naam);
            var auteur = $("<h4>").text(list[i].auteur);

            var divtekst = $("<div class='card'>");

            divtekst.append(naam).append(auteur); div.append(divtekst);

            $("#afbeeldingen").append(div);
        }
    }

    function makeDetails(list){

        for(var i in list){

            var div = $("<div class='dragend-page detailfoto' id="+i+">");

            var naam = $("<h3>").text(list[i].naam);
            var auteur = $("<h4>").text(list[i].auteur);

            var divtekst = $("<div class='detailcard'>");

            divtekst.append(naam).append(auteur);

            var finalshow = $("<h1>").text("Final Show");
            var projecten = $("<h2>").text("Projecten");

            var foto = $("<div class='detailbanner'>");

            var ster = $("<img id='staroutline' class='ster1"+i+" starselect' src='assets/FavoriteOutline.svg'>");
            var sterfill = $("<img id='starfill' class='ster2"+i+" starselect2' src='assets/FavoriteFill.svg'>");

            var divdetail = $("<div class='detailrichting'>");
            divtekst.append(sterfill).append(ster);

            if(localStorage.getItem("ster"+i) == null){
                $(sterfill).hide();
                $(ster).show();
            } else if(localStorage.getItem("ster"+i) == "true"){
                $(sterfill).show();
                $(ster).hide();
            } else if(localStorage.getItem("ster"+i) == "false"){
                $(sterfill).hide();
                $(ster).show();
            }

            var studiejaar = $("<p>").text(list[i].studiejaar);
            var categorie = $("<p>").text(list[i].categorie);
            var specialisatie = $("<p>").text(list[i].specialisatie);

            divdetail.append(studiejaar).append(categorie).append(specialisatie);

            var beschrijving = $("<p class='beschrijving'>").text(list[i].beschrijving);
            div.append(finalshow).append(projecten).append(foto).append(divtekst).append(divdetail).append(beschrijving);

            $("#pages div:first").append(div);

        }

        //TOEVOEGEN AAN FAVORIETEN
        $(".starselect").click(function(){

            var klasje = $(this).attr("class").split(" ")[0];
            var cutklasje = klasje.slice(5, klasje.length);
            $(this).hide();
            $(".ster2"+cutklasje).show();
            var grandparent = this.parentNode.parentNode;
            var id = $(grandparent).attr("id");

            favBool[id] = true;
            localStorage.setItem("ster"+id, "true");
        })

        //VERWIJDEREN VAN FAVORIETEN
        $(".starselect2").click(function(){
            var klasje = $(this).attr("class").split(" ")[0];
            var cutklasje = klasje.slice(5, klasje.length);
            $(this).hide();
            $(".ster1"+cutklasje).show();
            var grandparent = this.parentNode.parentNode;
            var id = $(grandparent).attr("id");

            favBool[id] = false;
            localStorage.setItem("ster"+id, "false");
        })

    }

    /*$('#accordion').hide();
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

    });*/



});

