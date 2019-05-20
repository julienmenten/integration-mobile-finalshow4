$(document).ready(function () {

    $.ajax({
        url: 'json/projecten.json',
        method: 'GET',
        dataType: 'json'
    }).done(function (data) {
        makeFavList(data.projects);
    }).fail(function (a, b) {
        console.log(a, b);
    }).always(function () {
        console.log('always');
    })


    function makeFavList(list) {

        for (var i in list) {

            var test = localStorage.getItem("ster" + i);
            console.log(test);
            var overlayDiv = $("<div class='overlay'>");
            var textOverlayDiv = $("<div class='textOverlay'>");
            var name = $("<h3>").text(list[i].naam);
            var auteur = $("<h4>").text(list[i].auteur);
            var starFill = $("<img id='favoStarStyle' class='ster2" + i + " starselect2' src='assets/FavoriteFill.svg'>");
            textOverlayDiv.append(name).append(auteur).append(starFill);
            overlayDiv.append(textOverlayDiv);

            if (test == "true") {
                $("#favorites").append(overlayDiv);
            }

        }

        $("#favorites .starselect2").click(function(){
            var klasje = $(this).attr("class").split(" ")[0];
            var cutklasje = klasje.slice(5, klasje.length);
            
            $(this).parent().parent().fadeOut(500);
            
            localStorage.setItem("ster"+cutklasje, "false");
        })

    }

})
