import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-cream/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blush">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl font-bold text-wine">
          🌸 HerHealth
        </Link>

        <div className="hidden md:flex gap-6 text-taupe font-medium">
          <Link to="/" className="hover:text-wine transition-colors">Home</Link>
          <Link to="/features" className="hover:text-wine transition-colors">Features</Link>
          <Link to="/education" className="hover:text-wine transition-colors">Education</Link>
          <Link to="/dashboard" className="hover:text-wine transition-colors">Dashboard</Link>
        </div>

        <Link
          to="/login"
          className="bg-wine text-white px-4 py-2 rounded-full hover:bg-wine-dark transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  )
}

export default Navbar