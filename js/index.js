(() => {
	'use strict';

	$modalAddTask.on('shown.bs.modal', {form: $formAddTask}, showModalHandler);
	$modalEditTask.on('shown.bs.modal',{form: $formEditTask}, showModalHandler);

	$formAddTask.on('submit', addFormSubmitHandler);

	$('body').on('click', '.btn-delete-task', deleteTaskHandler);
	$('body').on('click', '.btn-edit-task', editTaskHandler);
	$formEditTask.on('submit', editFormSubmitHandler)

	for (let key in localStorage) {
		if(!localStorage.hasOwnProperty(key)) continue;

		let task = JSON.parse(localStorage[key]);
		console.log(task)
		addTask(task, key);

		addStatistics(task);
	}

	$removeAllTasks.on('click', removeTasksHandler);

	$('[data-toggle="popover"]').popover();  
})();