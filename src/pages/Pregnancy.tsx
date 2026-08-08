import { useState } from 'react'
import FeaturePageLayout from '../components/FeaturePageLayout'

const trimesterInfo: Record<number, { name: string; description: string }> = {
  1: { name: 'First Trimester', description: 'Weeks 1–13. Major organs and body structures begin forming.' },
  2: { name: 'Second Trimester', description: 'Weeks 14–27. Often called the "golden period" — energy typically returns.' },
  3: { name: 'Third Trimester', description: 'Weeks 28–40. Rapid growth as the body prepares for birth.' },
}

function getTrimester(week: number): number {
  if (week <= 13) return 1
  if (week <= 27) return 2
  return 3
}

function Pregnancy() {
  const [week, setWeek] = useState(12)
  const trimester = getTrimester(week)

  return (
    <FeaturePageLayout
      icon="🤰"
      title="Pregnancy Mode"
      tagline="Week-by-week guidance, when you need it."
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select your current week: {week}
        </label>
        <input
          type="range"
          min={1}
          max={40}
          value={week}
          onChange={(e) => setWeek(Number(e.target.value))}
          className="w-full accent-pink-500"
        />
      </div>

      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl p-6 text-white mb-6">
        <p className="text-sm text-white/80 mb-1">{trimesterInfo[trimester].name}</p>
        <p className="font-medium">{trimesterInfo[trimester].description}</p>
      </div>

      <div className="bg-purple-50 rounded-2xl p-8 text-center border border-purple-100">
        <p className="text-3xl mb-3">👶</p>
        <p className="text-gray-700 font-medium mb-2">Personalized pregnancy tracking coming soon</p>
        <p className="text-sm text-gray-500">
          Detailed weekly fetal development updates and appointment reminders will be available once your account
          is connected.
        </p>
      </div>
    </FeaturePageLayout>
  )
}

export default Pregnancy