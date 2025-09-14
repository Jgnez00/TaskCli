import fs from 'fs';

const [message, description] = process.argv.splice(2);

const listTasks = () => {
  const data = fs.readFileSync('task.json', 'utf-8');
  data = JSON.parse(data);

  return data;
}

const writeFile = (message) => {
  fs.writeFileSync('task.json', JSON.stringify([message], null, 2));
};

const saveTask = (description) => {
  if (!fs.existsSync('task.json')) {
    writeFile(message);
    return;
  } 

  const data = fs.readFileSync('task.json', 'utf-8');
  const tasks = JSON.parse(data);

  tasks.push(message);
  writeFile(description);
};

if (message == 'add') {
  if (!description) {
    console.log('Cannot create a task without a description');
  } else {
    saveTask(description);
    console.log('Task created successfully');
  }
}