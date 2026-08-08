import { useState } from 'react'
import FeaturePageLayout from '../components/FeaturePageLayout'

interface Reminder {
  id: string
  name: string
  frequency: string
  time: string
}

function Medications() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [name, setName] = useState('')
  const [frequency, setFrequency] = useState('Once daily')
  const [time, setTime] = useState('')

  function handleAdd(e: React.FormEvent) {
    e.preventDefault()

    if (!name.trim() || !time) return

    const newReminder: Reminder = {
      id: Date.now().toString(),
      name: name.trim(),
      frequency,
      time,
    }

    setReminders((prev) => [...prev, newReminder])
    setName('')
    setTime('')
  }

  function handleRemove(id: string) {
    setReminders((prev) => prev.filter((reminder) => reminder.id !== id))
  }

  return (
    <FeaturePageLayout
      icon="💊"
      title="Medication Reminders"
      tagline="Never miss birth control, vitamins, or supplements."
    >
      <form
        onSubmit={handleAdd}
        className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-4 mb-8"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Medication name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Vitamin D"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Frequency
            </label>

            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option>Once daily</option>
              <option>Twice daily</option>
              <option>Weekly</option>
              <option>As needed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reminder time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors"
        >
          Add Reminder
        </button>
      </form>

      {reminders.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No reminders yet — add your first one above.
        </p>
      ) : (
        <div className="space-y-3">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-center justify-between bg-white/60 rounded-xl p-4 border border-white/50"
            >
              <div>
                <p className="font-medium text-gray-800">
                  {reminder.name}
                </p>

                <p className="text-sm text-gray-500">
                  {reminder.frequency} · {reminder.time}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(reminder.id)}
                className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </FeaturePageLayout>
  )
}

export default Medications