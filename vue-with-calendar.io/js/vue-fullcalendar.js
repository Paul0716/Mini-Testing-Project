Vue.directive('fullcalendar', {
	inserted: function (el, binding, vnode) {
		console.log(options);
		var options = binding.value;
		$(el).fullCalendar({
			weekends: true,
			locale: "zh-tw",
			header: {
				left: 'prev',
				center: 'title',
				right: 'next',
			},
			dayClick: function(date, jsEvent, view) {
				console.log(date.format("Y-M-D"));
			},
			viewRender: function(view, el) {
				console.log("viewRender.", $(el).attr("id"));
				console.log(view.intervalStart.format("Y-M-D"));
				// var now = new Date(); 
				// var end = new Date();
				// end.setMonth(now.getMonth() + 1); //Adjust as needed

				// var cal_date_string = view.intervalStart.getMonth()+'/'+view.intervalStart.getFullYear();
				// var cur_date_string = now.getMonth()+'/'+now.getFullYear();
				// var end_date_string = end.getMonth()+'/'+end.getFullYear();

				if(cal_date_string == cur_date_string) {
					$('.fc-button-prev').addClass("fc-state-disabled");
				} else {
					$('.fc-button-prev').removeClass("fc-state-disabled");
				}

				if(end_date_string == cal_date_string) {
					$('.fc-button-next').addClass("fc-state-disabled");
				} else {
					$('.fc-button-next').removeClass("fc-state-disabled");
				}
			},
		});
	}
});