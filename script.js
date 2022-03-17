// Adhere to SOLID principles
// Create project with OOP
// MVC model (Model, View, and Controller)

// CRUD operations
// Create, Read, Update and Delete

class Todo {
    constructor(title, project, description, priority) {
        this.id = '', // randomly generated ID
        this.title = title, 
        this.project = project,
        this.description = description,
        this.isComplete = false,
        this.createdAt = Date.now(), // today's date
        this.dueDate = '',
        this.priority = priority // low, medium, high
    }
}

const todo = new Todo("homework", "school", "do homework before 9pm", "high");

console.log(todo);
console.log(Date);