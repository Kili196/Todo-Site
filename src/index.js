import "./styles.css"

import { loadDomElements } from "./components/loadDom";








const loadedDom = loadDomElements();

Array.from(loadedDom.projects).forEach(project => project.addEventListener("click", () => {
    loadedDom.project_name[0].innerHTML = project.innerHTML;
    console.log(projects[project.id].projectTasks);
}));
