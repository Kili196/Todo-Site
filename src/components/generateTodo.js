import { format } from "date-fns";






function createTodo(todoName) {
    const creationDate = new Date();
    const formattedDate = format(creationDate, 'EEEE, MMMM do');
    return ({
        "todoName": todoName, "creationDate": formattedDate
    })
}

export { createTodo }