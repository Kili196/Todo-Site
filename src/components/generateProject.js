import { createProject } from "./generateProjectObject"
import { addProjectToDom } from "./addProjectDom";

const projects = [];

function generateProjectAndAddItToDom(projectname) {
    let firstProject = createProject(projectname);
    firstProject.addTaskToProject("task1");
    addProjectToDom(firstProject, projects);
    projects.push(firstProject);
    return firstProject;
}

export { projects, generateProjectAndAddItToDom }
