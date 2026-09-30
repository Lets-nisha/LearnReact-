import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoStore'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul className="flex flex-col gap-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between gap-4 rounded-lg  px-4 py-3 border border-slate-700/50"
                    >
                        <span className="text-sm font-medium   truncate">
                            {todo.text}
                        </span>

                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="shrink-0 rounded px-2.5 py-1 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos