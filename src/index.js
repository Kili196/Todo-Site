import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/manageTasksInDom"
import { loadNoProjectScreen } from "./components/loadNoProjectScreen";
import { getProjectNamesFromLocalStorage } from "./components/addProjectAndTaskToLocalStorage"




let loadedDom = loadDomElements();





let currProject = null;
let isListenerAdded = false;

getProjectNamesFromLocalStorage();



function generateButton() {
    loadedDom.addTaskButton[0].removeAttribute("hidden");
}

function addTaskToProject() {
    currProject.addTaskToProject(loadedDom.taskName[0].value);
}

function showAddToTaskModal() {
    loadedDom.taskName[0].value = "";
    loadedDom.addTaskModal[0].showModal();
    loadTasks(currProject);
}

function closeAddToTaskModal() {
    addTaskToProject();
    loadedDom.addTaskModal[0].close();
    loadTasks(currProject)
}


function updateAndLoadUi() {

    if (currProject != null) {

        loadedDom.noProject_screen[0].innerHTML = "";
        generateButton();
        if (isListenerAdded === false) {
            loadedDom.addTaskButton[0].addEventListener("click", () => {
                showAddToTaskModal();
            });
            loadedDom.addTaskButton[1].addEventListener("click", () => {
                closeAddToTaskModal();
            });
            isListenerAdded = true;
        }
    }
    else {
        loadNoProjectScreen();
    }
}





if (loadedDom.projects != null) {
    Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
        currProject = projects[project.id];
        loadedDom.project_name[0].innerHTML = project.innerHTML;
        updateAndLoadUi();
        loadTasks(currProject);

    }));


}





updateAndLoadUi();






































