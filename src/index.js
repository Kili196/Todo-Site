import "./styles.css"

import { loadDomElements } from "./components/loadDom";
import { generateProjectAndAddItToDom, projects } from "./components/generateProject";
import { loadTasks } from "./components/loadTasksIntoDom"







const loadedDom = loadDomElements();

generateProjectAndAddItToDom("Project-1")
generateProjectAndAddItToDom("Project-2")
generateProjectAndAddItToDom("Project-3")
generateProjectAndAddItToDom("Project-4").addTaskToProject("hiii")


Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    loadedDom.project_name[0].innerHTML = project.innerHTML;

    loadTasks(projects[project.id])

}));
