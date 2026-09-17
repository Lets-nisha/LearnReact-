import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gray-100 px-4 py-10">

        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hello, I am Nisha 👋
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Today I Learn Context Provider!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Login
            </h2>

            <Login />
          </div>

          <div className="bg-white rounded-2xl   p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              Profile
            </h2>

            <Profile />
          </div>

        </div>

      </div>
    </UserContextProvider>

  )
}

export default App
