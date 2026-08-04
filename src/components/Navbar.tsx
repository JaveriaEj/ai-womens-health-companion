import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-pink-600">
          🌸 HerHealth
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-500 transition-colors">
            Home
          </Link>

          <Link to="/features" className="hover:text-pink-500 transition-colors">
            Features
          </Link>

          <Link to="/education" className="hover:text-pink-500 transition-colors">
            Education
          </Link>

          <Link to="/dashboard" className="hover:text-pink-500 transition-colors">
            Dashboard
          </Link>
        </div>

        <Link
          to="/login"
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar