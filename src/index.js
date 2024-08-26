import "./styles.css"
import { createProject } from "./components/generateProject"
import { loadDomElements } from "./components/loadDom";
import { addProjectToDom } from "./components/addProjectDom";

const projects = [];
let firstProject = createProject("hiii");
firstProject.addTaskToProject("hiii");
addProjectToDom(firstProject, projects);
projects.push(firstProject)




const loadedDom = loadDomElements();

Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    console.log(project)
    loadedDom.project_name[0].innerHTML = project.innerHTML;
}));
