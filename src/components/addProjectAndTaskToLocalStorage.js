import { generateProjectAndAddItToDom, projects } from "./generateProject";
import { loadTasks } from "./manageTasksInDom"



function getProjectNamesFromLocalStorage() {
    const projectsFromLocalStorage = JSON.parse(localStorage.getItem("projects"));
    for (const project in projectsFromLocalStorage) {

        const projectName = projectsFromLocalStorage[project].projectName
        const generatedProjectFromLocalStorage = generateProjectAndAddItToDom(projectName);

        if (localStorage.getItem(projectName) !== null) {
            const tasksFromLocalStorage = JSON.parse(localStorage.getItem(projectName));
            for (const tasks in tasksFromLocalStorage) {

                generatedProjectFromLocalStorage.addTaskToProject(tasksFromLocalStorage[tasks].todoName);
                loadTasks(generatedProjectFromLocalStorage);
            }
        }
    }
}

export { getProjectNamesFromLocalStorage }