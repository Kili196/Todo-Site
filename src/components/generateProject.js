import { loadDomElements } from "./loadDom"

function createProject(projectName) {
    const projectTasks = [];

    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            projectTasks.push(taskName);
        }
    }
}




export { createProject }