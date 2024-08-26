import "./styles.css"
import { createProject } from "./components/generateProject"
import { loadDomElements } from "./components/loadDom";


let firstProject = createProject("hiii");
firstProject.addTaskToProject("hiii");

const loadedDom = loadDomElements();

Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {

    loadedDom.project_name[0].innerHTML = project.innerHTML;
}));
