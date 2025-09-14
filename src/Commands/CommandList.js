export class List {
  constructor (operation) {
    this.operation = operation;
  }

  isMe (command) {
    return command === 'list';
  }

  execute ({ status }) {
    const tasks = this.operation.listTasks();
    let filteredTasks = [];

    if (tasks.length === 0) {
      console.log('No tasks found');
      return;
    }
    
    if (status) {
      filteredTasks = tasks.filter(task => task.status === status);
    }
    
    if (filteredTasks.length === 0) {
      console.log('No tasks found with the specified status');
      return;
    }

    const resultTask = filteredTasks.length > 0 ? filteredTasks : tasks;
    console.log(resultTask);
    return
  }
}