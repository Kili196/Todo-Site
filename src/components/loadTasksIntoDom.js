import { loadDomElements } from "./loadDom";


function loadTasks(project) {

    const projectTodos = loadDomElements().project_todos[0];
    document.getElementsByClassName("project-todos")[0].innerHTML = ""


    console.log(project.projectTasks.forEach(task => {
        const todo_div = document.createElement("div");
        todo_div.className = "todo";

        const todoheadline_div = document.createElement("div");
        todoheadline_div.className = "todoheadline"
        todoheadline_div.innerHTML = task;

        todo_div.appendChild(todoheadline_div);
        projectTodos.appendChild(todo_div)


    }));
}

export { loadTasks }