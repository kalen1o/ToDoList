'use strict';
function showModalHandler() {
	$('[name="title"]', $formAddTask).focus();
}

function addFormSubmitHandler(event) {
	event.preventDefault();
		console.log(this);

		let task = {
			title: $('[name="title"]', this).val(),
			status: 1 // 1 - todo, 2 - inprogress, 3 - done
		};

		if(!task.title) {
			$modalAddTask.modal('hide');
			return;
		};

		let id = new Date().getTime();
		localStorage.setItem(id, JSON.stringify(task));

		addTask(task);
		addStatistics(task)

		$modalAddTask.modal('hide');

		this.reset();
}

function removeTasksHandler() {
	localStorage.clear();
	addStatistics();
	$('.list-group-item').remove();
}