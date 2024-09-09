import { loadDomElements } from "./loadDom";



function loadNoProjectScreen() {

    loadDomElements().project_todos[0].innerHTML = "";
    const todo_view = loadDomElements().todo_view[0];
    const centeredDiv = document.createElement("div");
    centeredDiv.className = "no-project-screen";
    centeredDiv.innerHTML = "NO PROJECT SELECTED";
    todo_view.appendChild(centeredDiv)
}

export { loadNoProjectScreen }