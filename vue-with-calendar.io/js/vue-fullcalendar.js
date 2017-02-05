Vue.directive('fullcalendar', {
	inserted: function (el, binding, vnode) {
		console.log(options);
		var options = binding.value;
		$(el).fullCalendar({
			weekends: true,
			dayClick: function(date, jsEvent, view) {
				console.log(date.format("Y-M-D"));
			},
			lang: "zh",
		});
	}
});