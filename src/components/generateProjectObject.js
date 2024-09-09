import { createTodo } from "./generateTodo"

function createProject(projectName) {
    const projectTasks = [];
    let id = 0;

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            const createdTask = createTodo(taskName, id);
            projectTasks.push(createdTask);
            localStorage.setItem(projectName, projectTasks);
            id++;
        },

    }
}




export { createProject }