import { generateProjectAndAddItToDom, projects } from "./generateProject";
import { loadTasks } from "./manageTasksInDom"



function getProjectNamesFromLocalStorage() {
    for (const project in JSON.parse(localStorage.getItem("projects"))) {

        const projectName = JSON.parse(localStorage.getItem("projects"))[project].projectName
        const projectFromLocalStorage = generateProjectAndAddItToDom(projectName);
        if (localStorage.getItem(projectName) !== null) {
            for (const tasks in JSON.parse(localStorage.getItem(projectName))) {
                projectFromLocalStorage.addTaskToProject(JSON.parse(localStorage.getItem(projectName))[tasks]);
                loadTasks(projectFromLocalStorage);
            }
        }
    }
}

export { getProjectNamesFromLocalStorage }