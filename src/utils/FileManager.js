import fs from 'fs';

export default class TaskOpertation {
  static listTasks = () => {
    let data = fs.readFileSync('../../task.json', 'utf-8');
    data = JSON.parse(data);

    return data;
  }

  static writeFile = (task) => {
    fs.writeFileSync('../../task.json', JSON.stringify(task, null, 2));
  };

  static saveTask = (task) => {
    let tasks = [];
    
    if (!fs.existsSync('../../task.json')) {
      tasks.push(task);
      this.writeFile(tasks);
      return;
    }

    const data = fs.readFileSync('../../task.json', 'utf-8');
    tasks = JSON.parse(data);

    tasks.push(task);
    this.writeFile(tasks);
  };
}