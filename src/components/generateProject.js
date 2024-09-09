import { createProject } from "./generateProjectObject"
import { addProjectToDom } from "./addProjectDom";

const projects = [];

function generateProjectAndAddItToDom(projectname) {
    let createdProject = createProject(projectname);
    createdProject.addTaskToProject("task1");
    addProjectToDom(createdProject, projects);
    projects.push(createdProject);
    return createdProject;
}

export { projects, generateProjectAndAddItToDom }
