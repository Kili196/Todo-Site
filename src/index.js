import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/loadTasksIntoDom"
import { add, format } from "date-fns";
import { loadNoProjectScreen } from "./components/loadNoProjectScreen";
import { tr } from "date-fns/locale";


let loadedDom = loadDomElements();

generateProjectAndAddItToDom("Project-1")
generateProjectAndAddItToDom("Project-2")
generateProjectAndAddItToDom("Project-3")
generateProjectAndAddItToDom("Project-4").addTaskToProject("hiii")

let currProject = null;
let isListenerAdded = false;


function generateButton() {
    console.log(loadedDom.addTaskButton)
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

        const taskToFind = currProject.projectTasks[1];
        console.log(taskToFind);
        console.log(currProject.projectTasks.findIndex(task => task == taskToFind));
    }));
}




updateAndLoadUi();






































