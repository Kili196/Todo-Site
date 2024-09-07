import { format } from "date-fns";






function createTodo(todoName, id) {
    const creationDate = new Date();
    const formattedDate = format(creationDate, 'EEEE, MMMM do');
    return ({
        "todoName": todoName, "creationDate": formattedDate, id
    })
}

export { createTodo }