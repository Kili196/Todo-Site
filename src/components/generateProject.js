function createProject(projectName) {
    const projectTasks = [];
    console.log("hiii")
    return {
        "projectName": projectName,
        "projectTasks": projectTasks,
        addTaskToProject(taskName) {
            projectTasks.push(taskName);
        }
    }
}


export { createProject }