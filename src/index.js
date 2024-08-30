import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/loadTasksIntoDom"
import { format } from "date-fns";







const loadedDom = loadDomElements();

generateProjectAndAddItToDom("Project-1")
generateProjectAndAddItToDom("Project-2")
generateProjectAndAddItToDom("Project-3")
generateProjectAndAddItToDom("Project-4").addTaskToProject("hiii")

let currProject = null;


Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    currProject = projects[project.id];
    loadedDom.project_name[0].innerHTML = project.innerHTML;
    loadTasks(currProject);
    console.log(currProject)
}));

loadedDom.addTaskButton[0].addEventListener("click", () => {
    currProject.addTaskToProject("Task-113123213");
    console.log(currProject);
    loadTasks(currProject);
});












const currentDate = new Date();
const formattedDate = format(currentDate, 'EEEE, MMMM do');
loadedDom.date_div[0].innerHTML = formattedDate
