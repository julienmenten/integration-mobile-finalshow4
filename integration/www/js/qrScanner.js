// JavaScript Document





$(document).on("pagebeforeshow", "#display", function() {
	
	//Before the page is rendered, we populate the table with local data.
	
    $("table#allTable tbody").empty();

    var data = localStorage.getItem("LocalData");
    console.log(data);
    data = JSON.parse(data);

    var html = "";

    for(var count = 0; count < data.length; count++)
    {
        html = html + "<tr><td>" + data[count][0] + "</td><td><a href='javascript:openURL(\"" + data[count][1] + "\")'>" + data[count][1] + "</a></td></tr>";
    }

    $("table#allTable tbody").append(html).closest("table#allTable").table("refresh").trigger("create");

});

$(document).ready(function(){
	


function scan(){
	
//checking the type of barcode once the user has scanned it. If the barcode is a QR Code, then we progress further, otherwise we do nothing.
	
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
				//If the barcode type is a QR Code then we ask the user to input a name to identify the scanned text and store it in local storage. Finally we display an alert box with text Done.
				
                if(result.format == "QR_CODE")
                {
                    navigator.notification.prompt("Please enter name of data",  function(input){
                        var name = input.input1;
                        var value = result.text;

                        var data = localStorage.getItem("LocalData");
                        console.log(data);
                        data = JSON.parse(data);
                        data[data.length] = [name, value];

                        localStorage.setItem("LocalData", JSON.stringify(data));
						
						
                        alert("Done");
                    });
                }
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
   );
}



function openURL(url){
    window.open(url, '_blank', 'location=yes');
}
	
});