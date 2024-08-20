import "./styles.css"
import { createProject } from "./components/generateProject"
import { loadDomElements } from "./components/loadDom";


let firstProject = createProject("hiii");
firstProject.addTaskToProject("hiii");

const projects = document.getElementsByClassName("project");
console.log(projects)

console.log(loadDomElements());

