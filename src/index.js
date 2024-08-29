import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/loadTasksIntoDom"
import { compareAsc, constructFrom, format } from "date-fns";







const loadedDom = loadDomElements();

generateProjectAndAddItToDom("Project-1")
generateProjectAndAddItToDom("Project-2")
generateProjectAndAddItToDom("Project-3")
generateProjectAndAddItToDom("Project-4").addTaskToProject("hiii")


Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    loadedDom.project_name[0].innerHTML = project.innerHTML;
    console.log(projects[project.id]);
    loadTasks(projects[project.id])
}));




const currentDate = new Date();
const formattedDate = format(currentDate, 'EEEE, MMMM do');


loadedDom.date_div[0].innerHTML = formattedDate
