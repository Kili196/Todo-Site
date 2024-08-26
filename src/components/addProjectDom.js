import { loadDomElements } from "./loadDom";

function addProjectToDom(project) {
    const project_item = document.createElement("li");
    project_item.className = "project"
    project_item.innerHTML = project.projectName;
    console.log(project_item)
    loadDomElements().project_list[0].appendChild(project_item)
    console.log(loadDomElements().project_list)
}

export { addProjectToDom }