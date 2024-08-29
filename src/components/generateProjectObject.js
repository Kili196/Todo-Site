import { createTodo } from "./generateTodo"

function createProject(projectName) {
    const projectTasks = [];

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            projectTasks.push(createTodo(taskName));
        }
    }
}




export { createProject }