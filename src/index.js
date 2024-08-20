import "./styles.css"
import { createProject } from "./components/generateProject"


let firstProject = createProject("hiii");
firstProject.addTaskToProject("hiii");
console.log(firstProject.projectTasks);
