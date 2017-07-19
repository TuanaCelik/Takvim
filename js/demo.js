var events = [];
var settings = {};
var element = document.getElementById('caleandar');


caleandar(element, events, settings);
function createEvent(tur, tarih, aciklama){
	var date = tarih.split('-')
	events.push({'Date': new Date(date[0], date[1]-1, date[2]), 'Title': tur + "\\n" + aciklama});
	
	//updateCalendar(element, events, settings);
	//createCalendar(caleandar, element, 0);
	//console.log(events);
}
//console.log("yo");
