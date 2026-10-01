import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoStore'

const Todos = () => {
    const todos = useSelector(state => state.todos || state.todo?.todos || [])
    const dispatch = useDispatch()

    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEditClick = (todo) => {
        setEditId(todo.id)
        setEditText(todo.text)
    }

    const handleSaveClick = (id) => {
        if (editText.trim() !== '') {
            dispatch(updateTodo({ id, text: editText }))
        }
        setEditId(null)
    }

    const handleFocus = (e) => {
        const val = e.target.value
        e.target.value = ''
        e.target.value = val
    }

    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="relative flex flex-col justify-between h-[280px] rounded-2xl border border-amber-200/70 dark:border-slate-700/80 bg-amber-50/40 dark:bg-slate-800/90 p-4 shadow-sm hover:shadow-md transition-all group overflow-hidden"
                    >
                        <div className="absolute top-2 right-4 flex items-center gap-1 z-10 pointer-events-none ">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqFzpfVuY7EcSWZUcUMyZk-8YUjRA6OxAg3EezvjpZfRrsFEqmNuhJUo&s=10"
                                alt="Mickey Wave"
                                className="w-8 h-8 object-contain rounded-full border border-amber-300 dark:border-slate-600 shadow-sm "
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>

                        <div className="flex items-center justify-between border-b border-amber-200/60 dark:border-slate-700/60 pb-2 text-[11px] font-bold text-amber-900/80 dark:text-amber-300 uppercase tracking-wider shrink-0 pr-12">
                            <span className="flex items-center gap-1">
                                📌 Note
                            </span>

                        </div>

                        <div className="flex-1 my-2 overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-1.5  [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full">
                            {editId === todo.id ? (
                                <textarea
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onFocus={handleFocus}
                                    className="w-full h-full bg-amber-100/50 dark:bg-slate-900/50 rounded-lg p-2 text-xs font-medium text-slate-800 dark:text-slate-100 leading-relaxed outline-none resize-none font-sans border border-amber-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-400"
                                    autoFocus
                                />
                            ) : (
                                <p className="text-xs font-medium text-slate-700 dark:text-slate-200 leading-relaxed break-words font-sans">
                                    {todo.text}
                                </p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-2 pt-2 border-t border-amber-200/50 dark:border-slate-700/50 shrink-0">
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="shrink-0 rounded-lg bg-rose-100 dark:bg-rose-950/50 px-3 py-1.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                            >
                                Delete
                            </button>
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleSaveClick(todo.id)}
                                    className="shrink-0 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 px-3 py-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditClick(todo)}
                                    className="shrink-0 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer active:scale-95 shadow-xs"
                                >
                                    Update
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos