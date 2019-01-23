function addTask(task, id) {
	let $btnDelete = $('<a>').addClass('btn btn-danger btn-delete-task btn-xs pull-right').append('<i class="glyphicon glyphicon-trash">'),
		$btnEdit = $('<a>').addClass('btn btn-warning btn-edit-task btn-xs pull-right').append('<i class="glyphicon glyphicon-pencil">'),
		$text = $('<span>').text(task.title).addClass('single-task');

	$('<li>')
		.appendTo(`[data-status="${task.status}"]`)
		.addClass('list-group-item')
		.attr({'data-id': id, 'data-toggle': 'popover','title': task.title, 'data-content': task.date + ': ' + task.description})
		//.text(task.title)
		.append($text)
		.append($btnDelete)
		.append($btnEdit);
}

function addStatistics(task) {
	if (arguments.length < 2) {
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
	} else {
		switch (task.status) {
			case 1: counter_1--; break;
			case 2: counter_2--; break;
			case 3: counter_3--; break;
		}
	}

	$('.counter-1').text(counter_1);
	$('.counter-2').text(counter_2);
	$('.counter-3').text(counter_3);
}

function updateTask(task, id) {
	$(`[data-id="${id}"] .single-task`).text(task.title);
}