function loadDomElements() {
    const projects = document.getElementsByClassName("project");
    const project_name = document.getElementsByClassName("project-name");
    const project_list = document.getElementsByClassName("project-list");
    const project_todos = document.getElementsByClassName("project-todos");
    const date_div = document.getElementsByClassName("date");
    const addTaskButton = document.getElementsByClassName("add-task-button");
    const product_view = document.getElementsByClassName("todo-view");
    return ({
        "projects": projects, "project_name": project_name,
        "project_list": project_list, "project_todos": project_todos, "date_div": date_div, addTaskButton, product_view
    });
}

export { loadDomElements }