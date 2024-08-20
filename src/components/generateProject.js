function createProject(projectName) {
    const projectTasks = [];
    console.log("hiii")
    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(name) {
            projectTasks.add(name)
        }
    }
}


export { createProject }