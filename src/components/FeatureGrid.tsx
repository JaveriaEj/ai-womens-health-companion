import FeatureCard from './FeatureCard'

const features = [
  {
    icon: '🩸',
    title: 'Smart Cycle Tracking',
    description: 'Period prediction, ovulation tracking, and fertile window insights tailored to your body.',
  },
  {
    icon: '🤖',
    title: 'AI Health Assistant',
    description: 'Ask questions about symptoms and get clear, judgment-free guidance — anytime.',
  },
  {
    icon: '🍎',
    title: 'Nutrition Assistant',
    description: 'Personalized meal suggestions based on where you are in your cycle.',
  },
  {
    icon: '🧘',
    title: 'Mental Wellness',
    description: 'Mood tracking, guided breathing, and journaling to support your emotional health.',
  },
]

function FeatureGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Everything you need, in one place
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeatureGrid