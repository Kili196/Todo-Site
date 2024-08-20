function loadDomElements() {
    const projects = document.getElementsByClassName("project");
    return ({ "projects": projects })
}

export { loadDomElements }