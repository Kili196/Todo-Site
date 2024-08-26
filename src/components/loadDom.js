function loadDomElements() {
    const projects = document.getElementsByClassName("project");
    const project_name = document.getElementsByClassName("project-name");
    const project_list = document.getElementsByClassName("project-list");
    const project_todos = document.getElementsByClassName("project-todos")
    return ({
        "projects": projects, "project_name": project_name,
        "project_list": project_list, "project_todos": project_todos
    });
}

export { loadDomElements }