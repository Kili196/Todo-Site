function loadDomElements() {
    const projects = document.getElementsByClassName("project");
    const project_name = document.getElementsByClassName("project-name");
    const project_list = document.getElementsByClassName("project-list");
    const project_todos = document.getElementsByClassName("project-todos");
    const date_div = document.getElementsByClassName("date");
    const addTaskButton = document.getElementsByClassName("add-task-button");
    const todo_view = document.getElementsByClassName("todo-view");
    const noProject_screen = document.getElementsByClassName("no-project-screen");
    const addTaskModal = document.getElementsByClassName("add-task-modal");
    const taskName = document.getElementsByClassName("taskName-input");
    return ({
        "projects": projects, "project_name": project_name,
        "project_list": project_list, "project_todos": project_todos, "date_div": date_div, addTaskButton, todo_view: todo_view, noProject_screen, addTaskModal,
        taskName
    });
}

export { loadDomElements }