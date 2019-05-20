$(document).ready(function () {

    $.ajax({
        url: "js/timetable.json",
        method: "GET",
        dataType: "json",
    }).done(function (data) {
        makeBar(data.schedule, data.schedule2);
        //    fillBar(data.schedule2);
        fillCircles(data.schedule);
    }).fail(function (a, b) {
        console.log(a, b);
    }).always(function () {
        console.log("always");
    })

    var barheight = 0;
    var circlecount = 0;
    var duration;

    function makeBar(data1, data2) {
        //console.log(data);

        for (var i in data1) {
            //console.log(data[i].time);
            var next = data1[i].timetonext;

            circlecount++;
            //            console.log("Circlecount: " + circlecount);

            var timetonextInt = parseInt(data1[i].timetonext);
            barheight = barheight + timetonextInt;

            var circle = $("<div class='circle ball_gradient' style='margin-bottom: " + next + "px'>");
            $(circle).attr('id', 'circle'+i);

            var timeText = $("<p class='timeText'>");
            var time = data1[i].time;
            var timeCut = time.substr(16, 5);
            $(timeText).text(timeCut);

            var nameText = $("<p class='nameText'>");
            $(nameText).text(data1[i].name);


            var circleLine = $("<div class='circleLine clearfix'>");
            $(circleLine).append(circle).append(nameText).append(timeText);

            $("#bigBlackBalls").append(circleLine);
            var hour = data1[i].time;
            var description = data1[i].name;
            
            var circleheight = 25;
            var bar = $("<div class='bar'>").css("height", timetonextInt + circleheight);
            $(bar).attr('id', i );
            $("#bigBlackBar").append(bar);

        }


        //        console.log("Circleheight: " + circleheight);

        var startDateParsed = new Date(data2.startdate);
        startDateParsed = startDateParsed.getTime();
        var endDateParsed = new Date(data2.enddate);
        endDateParsed = endDateParsed.getTime();

        /*     var duration = endDateParsed - startDateParsed;
             var bar = $("<div class='bar gradient'>").css("height", duration / 100000);*/


    }

    //////////////////////////////
    function fillCircles(data1) {
        function circleTime() {
            var currentDate = new Date();
            currentDate = currentDate.getTime();
            //console.log("Currentdate: "+currentDate);
            for (var i in data1) {
                var timeStamp = new Date(data1[i].time);
                timeStamp = timeStamp.getTime();
                //console.log("Timestamp :"+timeStamp)
                if (currentDate > timeStamp) {
                    $('#circle' + i).css('width', '27px');
                    $('#circle' + i).css('height', '27px');
                    $('#circle' + i).css('background-color', '#DEDEC5');
                    $('#circle' + i).css('border', '4px solid #272724');
                    $('#circle' + i).css('box-sizing', 'border-box');
                    $('#' + (i-1)).css('background-color', '#DEDEC5');
                }
            }
        }
        circleTime();
        setInterval(circleTime, 10000);

    }





    //////////////////////////////
    /*   function fillBar(data2) {
           var fillheight = 0;

           var dateCheck = setInterval(dateChecker, 1000);
           var currentDate;

           function dateChecker() {
               currentDate = new Date();
               currentDate = currentDate.getTime();
           }
           dateChecker();
           var startDate = new Date(data2.startdate);
           console.log("Start date: " + data2.startdate);
           startDate = startDate.getTime();
           var endDate = new Date(data2.enddate);
           endDate = endDate.getTime();
           console.log("End date: " + data2.startdate);
           console.log("Current date: " + currentDate);
           console.log("test:", currentDate > startDate, currentDate < endDate);

           var checkEventTime = setInterval(eventTime, 1000);

           function eventTime() {
               if (currentDate > startDate) {
                   console.log("top");
                   timer = setInterval(function () {
                       if (currentDate >= endDate) {
                           clearInterval(timer);
                           return;
                       }
                       myTimer();

                   }, 1);
               } else if (currentDate >= endDate) {
                   console.log("kut");
               }
           }
           
           var startDateParsed = new Date(data2.startdate);
           startDateParsed = startDateParsed.getTime();
           var endDateParsed = new Date(data2.enddate);
           endDateParsed = endDateParsed.getTime();

           var duration2 = endDateParsed - startDateParsed;
           var durationLength = duration2/10;

           function myTimer() {
               //     var d = new Date();
               //    var time = d.toLocaleTimeString();
               fillheight++;
               $(".bar").css("clip-path", "inset(0 0 " + (100 - fillheight / durationLength) + "% 0)");
           }
       }*/

})
