// JavaScript Document
    $('input').keyup(function () {
        // read text input
        var readText = $(this).val();

        //ajax call
        $.ajax({
            url: '../json/projecten.json',
            method: 'GET',
            data: {
                page: 1,
                query: $(this).val()
            }

        }).done(function (data) {

            console.log(data.results);
            $('.content').empty();

            for (var serie in data.results) {
                	
                var newSection = $('.content').append('<section class="tvSerie" id="thumbnailResult' + serie + '" ><div>' + afbeelding(id, serie) + '</div>' + '<br> <div class="serieContent"><h1>' + title + '</h1><br>' + 'id: ' + id + '<br>' + 'popularity: ' + populair + '<p>' + overview + '</p>' + '</div></section>');
                pressed(serie, id, serieNumber);
                $('.content').append(newSection);

            }

        });