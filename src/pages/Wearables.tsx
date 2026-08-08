import FeaturePageLayout from '../components/FeaturePageLayout'

const devices = [
  { name: 'Apple Watch', icon: '⌚' },
  { name: 'Fitbit', icon: '🏃' },
  { name: 'Garmin', icon: '🧭' },
]

function Wearables() {
  return (
    <FeaturePageLayout
      icon="⌚"
      title="Wearable Integration"
      tagline="Sync your wearable device for richer health insights."
    >
      <div className="grid sm:grid-cols-3 gap-5">
        {devices.map((device) => (
          <div
            key={device.name}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 text-center"
          >
            <div className="text-4xl mb-3">{device.icon}</div>
            <h3 className="font-semibold text-gray-800 mb-1">{device.name}</h3>
            <p className="text-xs text-gray-400 mb-4">Not connected</p>
            <button
              disabled
              className="w-full bg-gray-200 text-gray-400 px-4 py-2 rounded-full text-sm font-medium cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        ))}
      </div>
    </FeaturePageLayout>
  )
}

export default Wearables