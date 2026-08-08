import FeaturePageLayout from '../components/FeaturePageLayout'

const warningSymptoms = [
  'Heavy bleeding (soaking a pad/tampon every hour)',
  'Severe abdominal pain that does not improve',
  'Fainting or severe dizziness',
  'High fever above 103°F (39.4°C)',
]

function Emergency() {
  return (
    <FeaturePageLayout
      icon="🚨"
      title="Emergency Detection"
      tagline="Know when symptoms need urgent attention."
    >
      <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-6">
        <h3 className="font-semibold text-red-700 mb-3">
          ⚠️ Seek immediate care if you experience:
        </h3>

        <ul className="space-y-2">
          {warningSymptoms.map((symptom) => (
            <li
              key={symptom}
              className="text-sm text-red-600 flex gap-2"
            >
              <span>•</span>
              <span>{symptom}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/60 rounded-2xl p-6 border border-white/50 mb-6">
        <p className="text-sm text-gray-600">
          This app does not currently detect emergencies automatically.
          Symptom-based alerts are planned for a future update. If you are
          experiencing a medical emergency, contact local emergency services
          or go to the nearest emergency room immediately.
        </p>
      </div>

      <div className="text-center">
  <p className="text-sm text-gray-500 mb-4">
    In a medical emergency, contact your local emergency services immediately.
  </p>
  <div className="inline-block bg-red-500 text-white px-8 py-3 rounded-full font-medium">
    Call Local Emergency Services
  </div>
</div>
    </FeaturePageLayout>
  )
}

export default Emergency