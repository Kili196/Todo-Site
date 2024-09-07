import { createTodo } from "./generateTodo"

function createProject(projectName) {
    const projectTasks = [];
    let id = 0;

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            projectTasks.push(createTodo(taskName, id));
            id++;
        },

    }
}




export { createProject }