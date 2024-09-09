import { createProject } from "./generateProjectObject"
import { addProjectToDom } from "./addProjectDom";

const projects = [];

function generateProjectAndAddItToDom(projectname) {
    let createdProject = createProject(projectname);

    addProjectToDom(createdProject, projects);
    projects.push(createdProject);
    return createdProject;
}

export { projects, generateProjectAndAddItToDom }
