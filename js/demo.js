var events = [];
var settings = {};
var element = document.getElementById('caleandar');

caleandar(element, events, settings);
function createEvent(tur, tarih, aciklama){
	var date = tarih.split('-')
	events.push({'Date': new Date(date[0], date[1]-1, date[2]), 'Title': tur + "\\n" + aciklama});
	
	var dataa = {
		event_id: 1,
		type: tur,
		date: tarih,
		explanation: aciklama,
	};


	$.ajax({
	    url: "http://localhost:3000/addCalendarEvent",
	    type: 'POST', //use jsonp data type in order to perform cross-domain ajax
	    data: dataa,
	    success: function(response){
	        console.log("success");
	        console.log(response);
	    },
	    error: function(err){

	    	console.log("deneme");
	    
	    	console.log("Hataaaaaaa!!!");
	        alert(JSON.stringify(err));
	    }
    });

}
