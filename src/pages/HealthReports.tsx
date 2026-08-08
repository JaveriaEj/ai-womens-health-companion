import { getCycleHistory } from '../services/cycleStorage'
import FeaturePageLayout from '../components/FeaturePageLayout'

function HealthReports() {
  const history = getCycleHistory()

  return (
    <FeaturePageLayout
      icon="🩺"
      title="Health Reports"
      tagline="Export your cycle and symptom history for doctor visits."
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Cycle History Summary</h3>
        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No cycle data logged yet.</p>
        ) : (
          <p className="text-sm text-gray-600">
            {history.length} {history.length === 1 ? 'entry' : 'entries'} logged, most recent cycle length:{' '}
            {history[history.length - 1].cycleLength} days.
          </p>
        )}
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Symptom Summary</h3>
        <p className="text-gray-500 text-sm">Symptom trend summaries will appear here as you log more check-ins.</p>
      </div>

      <div className="text-center">
        <button
          disabled
          className="bg-gray-200 text-gray-400 px-8 py-3 rounded-full font-medium cursor-not-allowed"
        >
          Export PDF — Coming Soon
        </button>
      </div>
    </FeaturePageLayout>
  )
}

export default HealthReports