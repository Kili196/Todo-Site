import { createTodo } from "./generateTodo"

function createProject(projectName) {
    const projectTasks = [];
    let id = projectTasks.length > 0 ? projectTasks[projectTasks.length].id + 1 : 0;

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {


            const createdTask = createTodo(taskName, id);
            projectTasks.push(createdTask);
            localStorage.setItem(projectName, JSON.stringify(projectTasks));
            id++;
        },

    }
}




export { createProject }