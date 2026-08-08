import { useState } from 'react'
import FeaturePageLayout from '../components/FeaturePageLayout'

const categories = [
  'Gynecologist',
  'Hospital',
  'Pharmacy',
  'Lab',
]

function Healthcare() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <FeaturePageLayout
      icon="🏥"
      title="Nearby Healthcare"
      tagline="Find gynecologists, hospitals, pharmacies, and labs near you."
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
        <input
          type="text"
          placeholder="Search by location or facility name..."
          disabled
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed mb-4"
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${
                selected === category
                  ? 'border-pink-400 bg-pink-50 text-pink-600'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="bg-pink-50 rounded-2xl p-4 mb-6 border border-pink-100">
          <p className="text-sm text-pink-700">
            Selected category: <strong>{selected}</strong>
          </p>
        </div>
      )}

      <div className="bg-purple-50 rounded-2xl p-8 text-center border border-purple-100">
        <p className="text-3xl mb-3">📍</p>

        <p className="text-gray-700 font-medium mb-2">
          Location access needed
        </p>

        <p className="text-sm text-gray-500 mb-4">
          Real nearby healthcare facilities will be available once location
          services and the backend are connected.
        </p>

        <button
          type="button"
          disabled
          className="bg-purple-400 text-white px-6 py-2 rounded-full font-medium opacity-60 cursor-not-allowed"
        >
          Coming Soon
        </button>
      </div>
    </FeaturePageLayout>
  )
}

export default Healthcare