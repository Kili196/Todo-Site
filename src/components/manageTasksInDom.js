import { ta } from "date-fns/locale";
import { loadDomElements } from "./loadDom";


function deleteTaskFromDom(todo_div, checkBoxToDelete, project) {
    const taskToFind = checkBoxToDelete.id;
    todo_div.remove();
    project.projectTasks.splice(project.projectTasks.findIndex(task => task.id === taskToFind), 1);
}

function showNoTaskScreen(projectTodos) {
    const noTodoDiv = document.createElement("div");
    noTodoDiv.innerHTML = "NO TASKS IN THIS PROJECT, CLICK ABOVE TO ADD SOME";
    noTodoDiv.className = "noTodoScreen"
    projectTodos.appendChild(noTodoDiv);
}

function generateCheckBox(task) {
    const checkBoxToDelete = document.createElement("input");
    checkBoxToDelete.setAttribute("type", "checkbox");
    checkBoxToDelete.className = "checkBoxToDeleteTask";
    checkBoxToDelete.id = task.id;

    return checkBoxToDelete;
}

function generateTodoContainer(task) {
    const todoContainer = document.createElement("div");
    const todoheadline_div = document.createElement("div");

    todoheadline_div.className = "todoheadline"
    todoheadline_div.innerHTML = task.todoName;

    const creation_date = document.createElement("div");
    creation_date.className = "creation-date"
    creation_date.innerHTML = "created at " + task.creationDate;

    todoContainer.appendChild(todoheadline_div);
    todoContainer.appendChild(creation_date)

    return todoContainer;
}

function loadTasks(project) {

    const projectTodos = loadDomElements().project_todos[0];




    document.getElementsByClassName("project-todos")[0].innerHTML = ""
    if (project.projectTasks.length != 0) {

        project.projectTasks.forEach(task => {


            const todo_div = document.createElement("div");
            todo_div.className = "todo";

            const divForCheckBox = document.createElement("div");
            divForCheckBox.className = "checkBoxDiv";


            const checkBoxToDelete = generateCheckBox(task);

            checkBoxToDelete.addEventListener("click", () => {
                deleteTaskFromDom(todo_div, checkBoxToDelete, project);
                if (project.projectTasks.length == 0) {
                    showNoTaskScreen(projectTodos)
                }
            })



            divForCheckBox.appendChild(checkBoxToDelete);
            todo_div.appendChild(divForCheckBox);

            const todoContainer = generateTodoContainer(task);

            todo_div.appendChild(todoContainer);
            projectTodos.appendChild(todo_div);
        });
    }
    else {
        showNoTaskScreen(projectTodos);


    }
}

export { loadTasks }