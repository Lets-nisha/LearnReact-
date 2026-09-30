import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoStore'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
            <ul className="grid grid-cols-3 gap-3 w-full">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="relative flex flex-col justify-between h-[280px] rounded-xl border border-amber-200/80 dark:border-slate-700/80 bg-[#fffdfa] dark:bg-slate-800/90 p-3.5 shadow-sm transition-all hover:shadow-md overflow-hidden"
                        style={{
                            // Red margin line on left
                            borderLeft: "4px solid #f87171",
                            // Ruled notebook lines
                            backgroundImage: "linear-gradient(to bottom, transparent 25px, #e2e8f0 26px)",
                            backgroundSize: "100% 26px",
                        }}
                    >
                        {/* Top Header */}
                        <div className="flex items-center justify-between border-b border-dashed border-amber-300/60 pb-1 text-[10px] font-semibold text-amber-800/70 dark:text-amber-400/70 uppercase shrink-0">
                            <span>📌 Note</span>
                            <span className="text-rose-500 font-bold">Task</span>
                        </div>

                        {/* Text Content Area: Internal text clean cutoff so card size never changes */}
                        <div className="flex-1 overflow-hidden my-1">
                            <p className="text-xs font-medium text-slate-800 dark:text-slate-100 leading-[26px] break-words line-clamp-6 font-sans">
                                {todo.text}
                            </p>
                        </div>

                        {/* Delete Button at Bottom Right */}
                        <div className="flex justify-end pt-1 border-t border-slate-200/60 dark:border-slate-700/50 shrink-0">
                            <button
                                onClick={() => dispatch(removeTodo(todos.id))}
                                className="shrink-0 rounded bg-rose-50 dark:bg-rose-950/40 px-2 py-1 text-[10px] font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer active:scale-95"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos