import { createProject } from "./generateProjectObject"
import { addProjectToDom } from "./addProjectDom";

const projects = [];

function generateProjectAndAddItToDom(projectname) {
    let createdProject = createProject(projectname);
    addProjectToDom(createdProject, projects);
    projects.push(createdProject);
    localStorage.setItem("projects", JSON.stringify(projects));
    return createdProject;
}

export { projects, generateProjectAndAddItToDom }
