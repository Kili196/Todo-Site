function loadDomElements() {
    const projects = document.getElementsByClassName("project");
    const project_name = document.getElementsByClassName("project-name")
    return ({ "projects": projects, "project_name": project_name })
}

export { loadDomElements }