var events = [];
var settings = {};
var element = document.getElementById('caleandar');

loadCalendar(1);

function deleteEv (id) {

	swal({
      title: "Silmek istediğinize emin misiniz?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Evet sil!",
      closeOnConfirm: false
    },
    function(){
      $.ajax({
		url: "http://localhost:3000/addCalendarEvent",
		type: "POST",
		data: {
				method:'delete',
				ids: id
			  },
		success: function(res){
			console.log(res);
			console.log("Delete successful!");
			//events.splice()
			//caleandar(element, events, settings, 0);
			loadCalendar(0);
		},
		error: function(err){
			console.log("ERROR " + err);
		}
	  });
	  //createCalendar(element, );
      swal("Hatırlatma silinmiştir!", "Başka ödemeler ekleyebilirsiniz...", "success");
    });
	

}

function loadCalendar (first) {

	//console.log("This function will load caleandar");
	$.ajax({
            url: "http://localhost:3000/addCalendarEvent",
            type: 'GET',
            success: function(res) {
               	if(!first) events = [];
                for(var i = 0; i < res.length; i++){
                	var date = res[i].date.split('-')
                	var day  = date[2].split('T')[0];
                	day++;
                	//console.log(day);
                	events.push({'Date': new Date(date[0], date[1]-1, day), 'Title': res[i].type, 'Explanation': res[i].explanation, 'Id': res[i].events_id})
                }
                console.log(events);
				if(first){ 
					console.log("loading calendar for first time");
					caleandar(element, events, settings, 1);
				}
				else{
					console.log("loading updated caleandar");
					console.log(events);
					caleandar(element, events, settings, 0);
				} 
            },
            error: function(err){
	    	console.log("Unable to load");
	        console.log(err);
	    	}
        });
}

function createEvent(tur, tarih, aciklama){
	var date = tarih.split('-')
	
	var dataa = {
		method: 'put',
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
			events.push({'Date': new Date(date[0], date[1]-1, date[2]), 'Title': tur, 'Explanation': aciklama, 'Id': response.insertId});
			console.log(events);
	        caleandar(element, events, settings, 0);
	    },
	    error: function(err){
	    	console.log("Hataaaaaaa!!!");
	        alert(JSON.stringify(err));
	    }
    });

}
