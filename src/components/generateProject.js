import { loadDomElements } from "./loadDom"

function createProject(projectName) {
    const projectTasks = [];
    addProjectToDom(projectName);
    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            projectTasks.push(taskName);
        }
    }
}

function addProjectToDom(projectName) {
    const project_item = document.createElement("li");
    project_item.innerHTML = projectName;
    console.log(project_item)
    loadDomElements().project_list[0].appendChild(project_item)
    console.log(loadDomElements().project_list)
}


export { createProject }