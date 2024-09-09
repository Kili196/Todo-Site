import { createTodo } from "./generateTodo"

function createProject(projectName) {
    const projectTasks = [];
    let id = 0;

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            console.log(taskName)
            const createdTask = createTodo(taskName, id);
            projectTasks.push(createdTask);
            localStorage.setItem(projectName, JSON.stringify(projectTasks));
            id++;
        },

    }
}




export { createProject }