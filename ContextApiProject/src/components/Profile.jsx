import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext)


    if (!user) {
        return (
            <div className=" flex items-center justify-center   px-4">
                <div className="w-full max-w-md bg-white rounded-2xl  p-8 text-center">

                    <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                    rounded-full bg-red-100 text-red-500 text-2xl">
                        🔒
                    </div>

                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Please Login
                    </h1>

                    <p className="text-gray-500">
                        You need to login to access this page.
                    </p>

                </div>
            </div>
        )
    }

    return (
        <div className="   flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-white rounded-2xl   p-8 text-center">

                <div className="w-50 h-20 mx-auto mb-5 flex items-center justify-center
                rounded-2xl bg-blue-100 text-blue-600 text-3xl font-bold">
                    {user.username}
                </div>

                <p className="text-sm text-gray-500 mb-2">
                    Welcome back
                </p>

                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome {user.username}
                </h1>

                <p className="text-gray-500 mt-3">
                    You are successfully logged in.
                </p>

            </div>
        </div>
    )

}

export default Profile