import { ta } from "date-fns/locale";
import { loadDomElements } from "./loadDom";


function loadTasks(project) {

    const projectTodos = loadDomElements().project_todos[0];


    document.getElementsByClassName("project-todos")[0].innerHTML = ""

    project.projectTasks.forEach(task => {

        const todo_div = document.createElement("div");
        todo_div.className = "todo";

        const checkBoxToDelete = document.createElement("input");
        checkBoxToDelete.setAttribute("type", "checkbox");

        todo_div.appendChild(checkBoxToDelete);

        const todoContainer = document.createElement("div");

        const todoheadline_div = document.createElement("div");
        todoheadline_div.className = "todoheadline"
        todoheadline_div.innerHTML = task.todoName;

        const creation_date = document.createElement("div");
        creation_date.className = "creation-date"
        creation_date.innerHTML = "created at " + task.creationDate;

        todoContainer.appendChild(todoheadline_div);
        todoContainer.appendChild(creation_date)

        todo_div.appendChild(todoContainer);
        projectTodos.appendChild(todo_div)


    });
}

export { loadTasks }