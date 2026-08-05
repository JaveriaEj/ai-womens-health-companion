import { useState } from 'react'
import type { Mood } from '../types/symptom'
import { saveSymptomEntry } from '../services/symptomStorage'

const moodOptions: { value: Mood; emoji: string; label: string }[] = [
  { value: 'happy', emoji: '😊', label: 'Happy' },
  { value: 'neutral', emoji: '😐', label: 'Neutral' },
  { value: 'sad', emoji: '😢', label: 'Sad' },
  { value: 'anxious', emoji: '😰', label: 'Anxious' },
  { value: 'irritated', emoji: '😤', label: 'Irritated' },
]

function SymptomLogger() {
  const [mood, setMood] = useState<Mood>('neutral')
  const [waterLiters, setWaterLiters] = useState(1.5)
  const [sleepHours, setSleepHours] = useState(7)
  const [saved, setSaved] = useState(false)

  function handleSave() {
    saveSymptomEntry(mood, waterLiters, sleepHours)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Daily Check-In</h1>
      <p className="text-gray-600 mb-10">Log today's mood, water, and sleep in a few seconds.</p>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 space-y-8">
        {/* Mood picker */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">How are you feeling?</label>
          <div className="flex gap-3 flex-wrap">
            {moodOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setMood(opt.value)}
                className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl border-2 transition-colors ${
                  mood === opt.value
                    ? 'border-pink-400 bg-pink-50'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <span className="text-2xl">{opt.emoji}</span>
                <span className="text-xs text-gray-600">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Water slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Water intake: {waterLiters.toFixed(1)} L
          </label>
          <input
            type="range"
            min={0}
            max={4}
            step={0.1}
            value={waterLiters}
            onChange={(e) => setWaterLiters(Number(e.target.value))}
            className="w-full accent-blue-400"
          />
        </div>

        {/* Sleep slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sleep: {sleepHours} hours
          </label>
          <input
            type="range"
            min={0}
            max={12}
            step={0.5}
            value={sleepHours}
            onChange={(e) => setSleepHours(Number(e.target.value))}
            className="w-full accent-purple-400"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
        >
          Save Today's Check-In
        </button>

        {saved && (
          <p className="text-center text-green-600 text-sm font-medium">✅ Saved successfully!</p>
        )}
      </div>
    </div>
  )
}

export default SymptomLogger