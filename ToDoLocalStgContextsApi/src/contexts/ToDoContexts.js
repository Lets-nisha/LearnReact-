import { createContext, useContext } from "react";

export const ToDoContexts = createContext({
    todo: [
        {
            id: 1,
            todo: "Todo Mess",
            completed: false
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useToDo = () => {
    return useContext(ToDoContexts);
}


export const ToDoProvider = ToDoContexts.Provider