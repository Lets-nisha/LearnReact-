import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addTodo } from '../features/todo/todoStore'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="flex gap-3">
            <div className="relative flex-1">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="What needs to be done?"
                    className="w-full rounded-xl border border-slate-700  px-4 py-3 text-sm  placeholder-slate-500 shadow-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
            </div>
            <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 px-2 py-2 text-sm font-semibold text-white    transition-all duration-300  hover:scale-[1.02] active:scale-[0.96] focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
            >
                {/* Futuristic Neon Glow Background Layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-40 pointer-events-none"></span>

                {/* Subtle Shimmer Effect moving across the button */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></span>

                {/* Animated Plus Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="relative h-4 w-5 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

                {/* Button Text */}
                {/* <span className="relative tracking-wide">Add</span> */}
            </button>
        </form>
    );
};

export default AddTodo;