const https = require("https");

function get(url, callback) {

	try  {
	    https.get(url, function (result) {
		            var dataQueue = "";    
		            result.on("data", function (dataBuffer) {
				                dataQueue += dataBuffer;
				            });
		            result.on("end", function () {
				                callback(url, dataQueue);
				            });
		            result.on("error", function () {
				                callback(url, dataQueue);
				            });
		    	
		        });
	} catch(e)  {
		callback(url, "error");

	}
}

for(var i= 167; i< 255; i++) {
	for(var j= 0; j< 255; j++) {
		for(var k=0; k< 255; k++) {
			for(var l=0; l< 255; l++) {
				try { 
						get("https://" + i + "." + j + "." + k + "." + l  , function (url, data) {
							    // do something with data
							console.log(url, data);
						 });
				} catch(e) {
					console.log(url, data);

				}
			}
		}
	}
}
