import "./styles.css"
import { createProject } from "./components/generateProjectObject"
import { loadDomElements } from "./components/loadDom";
import { addProjectToDom } from "./components/addProjectDom";

const projects = [];
let firstProject = createProject("hiii");
firstProject.addTaskToProject("task1");
addProjectToDom(firstProject, projects);
projects.push(firstProject)




const loadedDom = loadDomElements();

Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    loadedDom.project_name[0].innerHTML = project.innerHTML;
    console.log(projects[project.id].projectTasks);
}));
