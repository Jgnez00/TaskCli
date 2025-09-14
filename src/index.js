import TaskOpertation from "./utils/FileManager.js";

const [method, param, status] = process.argv.splice(2);

const task = {
  description: param,
  status: status || 'done',
};

switch (method) {
  case 'add':
    if (!param) {
      console.log('Cannot create a task without a description');
      break;
    }

    saveTask(task);
    break;

  case 'list':
    const tasks = TaskOpertation.listTasks();
    if (tasks.length === 0) {
      console.log('No tasks found');
      break;
    }

    if (param) {
      const filteredTasks = tasks.filter(task => task.status === param);

      if (filteredTasks.length === 0) {
        console.log('No tasks found with the specified status');
        break;
      }

      console.log(filteredTasks);
      break;
    }

    console.log(tasks);
    break;

  default:
    console.log('Unknown command');
    break;
}