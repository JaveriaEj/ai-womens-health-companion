import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface FeaturePageLayoutProps {
  icon: string
  title: string
  tagline: string
  children: ReactNode
}

function FeaturePageLayout({ icon, title, tagline, children }: FeaturePageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/features" className="text-sm text-pink-500 hover:text-pink-600 mb-6 inline-block">
        ← Back to Features
      </Link>

      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-10 text-white mb-10 text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-white/90">{tagline}</p>
      </div>

      {children}
    </div>
  )
}

export default FeaturePageLayout