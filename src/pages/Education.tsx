import FeatureCard from '../components/FeatureCard'
import { educationTopics } from '../data/educationTopics'

function Education() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
        Education Hub
      </h1>

      <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
        Learn about your body, at your own pace — no judgment, just clarity.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationTopics.map((topic) => (
          <FeatureCard
            key={topic.title}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Education