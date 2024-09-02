import { loadDomElements } from "./loadDom";



function loadNoProjectScreen() {
    const todo_view = loadDomElements().product_view[0];
    const centeredDiv = document.createElement("div");
    centeredDiv.className = "no-project-screen";
    centeredDiv.innerHTML = "NO PROJECT SELECTED";
    todo_view.appendChild(centeredDiv)
}

export { loadNoProjectScreen }