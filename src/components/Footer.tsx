import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-lg font-bold text-pink-600">🌸 HerHealth</span>

        <div className="flex gap-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-pink-500 transition-colors">Features</Link>
          <Link to="/education" className="hover:text-pink-500 transition-colors">Education</Link>
        </div>

        <p className="text-xs text-gray-400 text-center md:text-right">
          © 2026 HerHealth. Not a substitute for professional medical advice.
        </p>
      </div>
    </footer>
  )
}

export default Footer