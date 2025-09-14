import TaskOpertation from "./utils/FileManager.js";

const [message, description, status] = process.argv.splice(2);

const task = {
  description: description,
  status: status || 'done',
};

if (message == 'add') {
  if (!description) {
    console.log('Cannot create a task without a description');
  } else {
    TaskOpertation.saveTask(task);
    console.log('Task created successfully');
  }
}