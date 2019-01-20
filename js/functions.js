function addTask(task) {
	$('<li>')
		.appendTo(`[data-status="${task.status}"]`)
		.addClass('list-group-item')
		.text(task.title);
}

function addStatistics(task) {
	if(task !== undefined) {
		switch (task.status) {
			case 1: counter_1++; break;
			case 2: counter_2++; break;
			case 3: counter_3++; break;
		}
	} else {
		counter_1 = 0,
		counter_2 = 0,
		counter_3 = 0;
	}

	$('.counter-1').text(counter_1);
	$('.counter-2').text(counter_2);
	$('.counter-3').text(counter_3);
}