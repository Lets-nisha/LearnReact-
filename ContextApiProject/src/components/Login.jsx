import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })


    }

    return (
        <div className="  flex items-center justify-center  px-4">
            <div className="w-full max-w-md bg-white rounded-2xl   p-8">

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none text-gray-800 placeholder-gray-400
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                            outline-none text-gray-800 placeholder-gray-400
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            transition"
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 bg-blue-600 text-white font-semibold
                        rounded-lg hover:bg-blue-700 active:scale-[0.98]
                        transition duration-200"
                    >
                        Submit
                    </button>

                </div>

            </div>
        </div>

    )
}

export default Login