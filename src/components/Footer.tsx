import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-cream/80 backdrop-blur-md border-t border-blush mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-heading text-lg font-bold text-wine">🌸 HerHealth</span>

        <div className="flex gap-6 text-sm text-taupe">
          <Link to="/" className="hover:text-wine transition-colors">Home</Link>
          <Link to="/features" className="hover:text-wine transition-colors">Features</Link>
          <Link to="/education" className="hover:text-wine transition-colors">Education</Link>
        </div>

        <p className="text-xs text-taupe/70 text-center md:text-right">
          © 2026 HerHealth. Not a substitute for professional medical advice.
        </p>
      </div>
    </footer>
  )
}

export default Footer