import { Link } from 'react-router-dom'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  path?: string
}

function FeatureCard({
  icon,
  title,
  description,
  path,
}: FeatureCardProps) {
  const content = (
    <div className="bg-white rounded-card p-6 shadow-sm hover:shadow-md transition-shadow border border-blush h-full">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="font-heading text-xl font-semibold text-wine mb-2">
        {title}
      </h3>

      <p className="text-taupe text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )

  if (path) {
    return (
      <Link
        to={path}
        className="block h-full hover:-translate-y-1 transition-transform"
      >
        {content}
      </Link>
    )
  }

  return content
}

export default FeatureCard