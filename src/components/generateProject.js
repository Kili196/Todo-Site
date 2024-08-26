import { createProject } from "./components/generateProjectObject"
import { addProjectToDom } from "./components/addProjectDom";

const projects = [];

function generateProjectAndAddItToDom(projectname) {
    let firstProject = createProject(projectname);
    firstProject.addTaskToProject("task1");
    addProjectToDom(firstProject, projects);
    projects.push(firstProject)
}

export { projects, generateProjectAndAddItToDom }
