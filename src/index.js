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


function updateAndLoadUi() {

    if (currProject != null) {

        loadedDom.noProject_screen[0].innerHTML = "";
        const addNewTaskButton = document.getElementsByClassName("add-task-button");
        generateButton();
        if (isListenerAdded === false) {
            loadedDom.addTaskButton[0].addEventListener("click", () => {
                currProject.addTaskToProject("Task-113123213");
                loadTasks(currProject);
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
        console.log(loadedDom.project_name[0]);
        loadedDom.project_name[0].innerHTML = project.innerHTML;
        updateAndLoadUi();
        loadTasks(currProject);
    }));

}


updateAndLoadUi();






































