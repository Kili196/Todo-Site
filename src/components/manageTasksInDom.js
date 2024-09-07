import { ta } from "date-fns/locale";
import { loadDomElements } from "./loadDom";


function deleteTaskFromDom(todo_div, checkBoxToDelete, project) {
    const taskToFind = checkBoxToDelete.id;
    todo_div.remove();
    project.projectTasks.splice(project.projectTasks.findIndex(task => task.id === taskToFind), 1);
}

function loadTasks(project) {

    const projectTodos = loadDomElements().project_todos[0];



    document.getElementsByClassName("project-todos")[0].innerHTML = ""

    project.projectTasks.forEach(task => {


        const todo_div = document.createElement("div");
        todo_div.className = "todo";

        const divForCheckBox = document.createElement("div");
        divForCheckBox.className = "checkBoxDiv";


        const checkBoxToDelete = document.createElement("input");
        checkBoxToDelete.setAttribute("type", "checkbox");
        checkBoxToDelete.className = "checkBoxToDeleteTask";
        checkBoxToDelete.id = task.id;

        checkBoxToDelete.addEventListener("click", () => {
            deleteTaskFromDom(todo_div, checkBoxToDelete, project);
        })



        divForCheckBox.appendChild(checkBoxToDelete);
        todo_div.appendChild(divForCheckBox);

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
        projectTodos.appendChild(todo_div);




    });
}

export { loadTasks }