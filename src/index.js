import "./styles.css"
import { createProject } from "./components/generateProject"
import { loadDomElements } from "./components/loadDom";


let firstProject = createProject("hiii");
firstProject.addTaskToProject("hiii");



Array.from(loadDomElements().projects).map(project => project.addEventListener("click", () => {
    console.log(project.innerHTML);
}));
