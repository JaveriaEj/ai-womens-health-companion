import FeatureCard from '../components/FeatureCard'
import { allFeatures } from '../data/allFeatures'

function Features() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
        Everything HerHealth Offers
      </h1>

      <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
        A complete companion for every stage of your health journey.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allFeatures.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Features