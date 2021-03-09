class Todo {
  constructor(title, description, dueDate, priority, comments) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.comments = comments;
  }
}

const getInput = () => {
  const getTitle = document.getElementById("title");
  const getDescription = document.getElementById("description");
  const getDueDate = document.getElementById("dueDate");
  const getPriority = document.getElementById("priority");
  const getComments = document.getElementById("comments");
};

export { Todo };
