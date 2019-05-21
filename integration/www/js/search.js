$(document).ready(function(){

    $(function(){
        $("#search").keyup(function(){
            var query = $(this).val().toLowerCase();

            $("#afbeeldingen h3").each(function(){

                var liname = $(this).text();
                var h4 = $(this).next().text();

                if(liname.toLowerCase().indexOf(query) != -1 || h4.toLowerCase().indexOf(query) != -1){
                    $(this).parent().parent().show();
                } else{
                    $(this).parent().parent().hide();
                }

            });

            if(query == ""){
                $("#afbeeldingen").children().show();
            }

        });
    })


});