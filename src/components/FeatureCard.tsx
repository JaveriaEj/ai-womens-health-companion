import { Link } from 'react-router-dom'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  path?: string
}

function FeatureCard({ icon, title, description, path }: FeatureCardProps) {
  const content = (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-white/50 h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )

  return path ? (
    <Link to={path} className="block hover:-translate-y-1 transition-transform">
      {content}
    </Link>
  ) : (
    content
  )
}

export default FeatureCard