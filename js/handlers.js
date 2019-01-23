'use strict';
function showModalHandler(event) {
	$('[name="title"]', event.data.form).focus();
	$('.input-group.date').datepicker({
	}); //Date
}

function addFormSubmitHandler(event) {
	event.preventDefault();
		console.log(this);

		let task = {
			title: $('[name="title"]', this).val(),
			status: 1, // 1 - todo, 2 - inprogress, 3 - done
			date: $('[name="date"]', this).val(),
			description: $('[name="description"]', this).val()
		};
		console.log(task)

		if(!task.title) {
			$modalAddTask.modal('hide');
			return;
		};

		let id = new Date().getTime();

		localStorage.setItem(id, JSON.stringify(task));

		addTask(task, id);
		addStatistics(task);

		$modalAddTask.modal('hide');

		this.reset();
}

function removeTasksHandler() {
	localStorage.clear();
	addStatistics();
	$('.list-group-item').remove();
}

function deleteTaskHandler(event) {
	event.preventDefault();

	let $parent = $(this).parents('[data-id]'),
		id = $parent.attr('data-id');
	console.log($parent.attr('data-id'));
	console.log($parent.data('id'));
	
	let task = JSON.parse(localStorage[id]),
		remove;
	addStatistics(task, remove);
	localStorage.removeItem(id);
	$parent.remove();
}

function editTaskHandler(event) {
	event.preventDefault();

	let $parent = $(this).parents('[data-id]'),
		id = $parent.attr('data-id');
	
	$modalEditTask.modal('show');

	let task = JSON.parse(localStorage.getItem(id));
	console.log(task);
	for (let key in task) {
		$formEditTask.find(`[name="${key}"]`).val(task[key]);
	}

	$formEditTask.find('[name="id"]').val(id);
}

function editFormSubmitHandler(event) {
	event.preventDefault();

	let task = {
		title: $('[name="title"]', this).val(),
		status: +$('[name="status"]', this).val(),
		date: $('[name="date"]', this).val(),
		description: $('[name="description"]', this).val()
	};

	let id = $('[name="id"]', this).val();

	let oldTask = JSON.parse(localStorage.getItem(id)),
		remove;

	if(task.status === oldTask.status) {
		updateTask(task, id)
	} else {
		$(`[data-id="${id}"]`).remove();
		addStatistics(oldTask, remove);
		addStatistics(task);
		addTask(task, id);
	}

	localStorage.setItem(id, JSON.stringify(task));

	/*$(`[data-id="${id}"]`).remove();
	addTask(task, id);*/

	$modalEditTask.modal('hide');
}