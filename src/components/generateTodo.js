import { format } from "date-fns";





export function createTodo(todoName) {
    const creationDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMMM do');
    return ({
        "todoName": todoName, "creationDate": formattedDate
    })
}

export { createTodo }