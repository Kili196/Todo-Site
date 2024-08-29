import { ta } from "date-fns/locale";
import { loadDomElements } from "./loadDom";


function loadTasks(project) {

    const projectTodos = loadDomElements().project_todos[0];
    document.getElementsByClassName("project-todos")[0].innerHTML = ""


    project.projectTasks.forEach(task => {

        const todo_div = document.createElement("div");
        todo_div.className = "todo";

        const todoheadline_div = document.createElement("div");
        todoheadline_div.className = "todoheadline"
        todoheadline_div.innerHTML = task.todoName;

        const creation_date = document.createElement("div");
        creation_date.className = "creation-date"
        creation_date.innerHTML = task.creationDate;

        todo_div.appendChild(todoheadline_div);
        todo_div.appendChild(creation_date)
        projectTodos.appendChild(todo_div)


    });
}

export { loadTasks }