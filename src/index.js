import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/loadTasksIntoDom"
import { format } from "date-fns";
import { loadNoProjectScreen } from "./components/loadNoProjectScreen";







const loadedDom = loadDomElements();

generateProjectAndAddItToDom("Project-1")
generateProjectAndAddItToDom("Project-2")
generateProjectAndAddItToDom("Project-3")
generateProjectAndAddItToDom("Project-4").addTaskToProject("hiii")

let currProject = null;




if (loadedDom.projects != null) {
    Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
        currProject = projects[project.id];
        console.log(loadedDom.project_name[0]);
        loadedDom.project_name[0].innerHTML = project.innerHTML;
        loadTasks(currProject);
    }));
}





loadedDom.addTaskButton[0].addEventListener("click", () => {
    currProject.addTaskToProject("Task-113123213");

    loadTasks(currProject);
});





loadNoProjectScreen();

























