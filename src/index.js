import { Add } from "./Commands/CommandAdd.js";
import { List } from "./Commands/CommandList.js";
import TaskOperation from "./utils/FileManager.js";

const [method, param, status] = process.argv.splice(2);
const ACCTIONS = [
  new Add(TaskOperation),
  new List(TaskOperation),
];

const task = {
  description: param,
  status: status || 'done',
};

ACCTIONS.forEach(action => {
  if (action.isMe(method)) {
    action.execute(task);
  }
})

switch (method) {
  case 'list':
    

  default:
    console.log('Unknown command');
    break;
}