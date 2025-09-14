export class Add {
  constructor (operation) {
    this.operation = operation;
  }

  isMe (command) {
    return command == 'add';
  }

  execute (task) {
    if (!task.description) {
      console.log('Cannot create a task without a description');
      return;
    }
    
    this.operation.saveTask(task);
    console.log('Message added successfully');
  }
}