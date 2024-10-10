export default class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addTask({ title, description, dueDate, priority }) {
    this.list.push(new Task(title, description, dueDate, priority));
  }
}
