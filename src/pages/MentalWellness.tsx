import FeaturePageLayout from '../components/FeaturePageLayout'

const wellnessTools = [
  {
    icon: '🧘',
    title: 'Guided Breathing',
    description:
      '4-7-8 breathing technique to help you relax and slow your breathing.',
  },
  {
    icon: '📓',
    title: 'Journaling',
    description:
      "Write down what's on your mind — no judgment, just clarity.",
  },
  {
    icon: '🎵',
    title: 'Calming Sounds',
    description:
      'Ambient sounds to help you relax, focus, or unwind.',
  },
  {
    icon: '💬',
    title: 'Mood Check-In',
    description:
      'Log how you are feeling and keep track of your emotional wellbeing.',
  },
]

function MentalWellness() {
  return (
    <FeaturePageLayout
      icon="🧘"
      title="Mental Wellness"
      tagline="Your emotional health matters just as much as your physical health."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {wellnessTools.map((tool) => (
          <div
            key={tool.title}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:-translate-y-1 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">
              {tool.icon}
            </div>

            <h3 className="font-semibold text-gray-800 mb-1">
              {tool.title}
            </h3>

            <p className="text-sm text-gray-600">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </FeaturePageLayout>
  )
}

export default MentalWellness