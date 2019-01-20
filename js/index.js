(() => {
	'use strict';

	$modalAddTask.on('shown.bs.modal', showModalHandler);

	$formAddTask.on('submit', addFormSubmitHandler);

	for (let key in localStorage) {
		console.log(key);
		if(!localStorage.hasOwnProperty(key)) continue;

		let task = JSON.parse(localStorage[key]);
		addTask(task);
		addStatistics(task);
	}

	$removeAllTasks.on('click', removeTasksHandler);
})();