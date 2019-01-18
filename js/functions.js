function addTask(task) {
	$('<li>')
		.appendTo(`[data-status="${task.status}"]`)
		.addClass('list-group-item')
		.text(task.title);
}