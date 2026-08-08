import FeaturePageLayout from '../components/FeaturePageLayout'

const cyclePhaseNutrition = [
  { phase: 'Menstrual', icon: '🩸', tip: 'Iron-rich foods like spinach, lentils, and red meat to replenish what you lose.' },
  { phase: 'Follicular', icon: '🌱', tip: 'Light, energizing foods — fresh fruits, whole grains, and lean protein.' },
  { phase: 'Ovulatory', icon: '☀️', tip: 'Fiber-rich vegetables and antioxidants to support hormone balance.' },
  { phase: 'Luteal', icon: '🌙', tip: 'Complex carbs and magnesium-rich foods (dark chocolate, nuts) to ease PMS.' },
]

function Nutrition() {
  return (
    <FeaturePageLayout
      icon="🍎"
      title="Nutrition Assistant"
      tagline="Eating in sync with your cycle, not against it."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {cyclePhaseNutrition.map((item) => (
          <div key={item.phase} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{item.phase} Phase</h3>
            <p className="text-sm text-gray-600">{item.tip}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 mt-6 border border-blue-100 text-center">
        <p className="text-blue-700 font-medium">💧 Remember to stay hydrated — aim for 2-3L of water daily.</p>
      </div>
    </FeaturePageLayout>
  )
}

export default Nutrition