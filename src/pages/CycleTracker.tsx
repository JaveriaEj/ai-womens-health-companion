import { useState, type FormEvent } from 'react'
import type { CycleData } from '../types/cycle'
import {
  getNextPeriodDate,
  getFertileWindow,
  getDaysUntil,
  formatDate,
} from '../utils/cycleCalculations'
import { saveCycleEntry } from '../services/cycleStorage'

function CycleTracker() {
  const [lastPeriodStart, setLastPeriodStart] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [periodLength, setPeriodLength] = useState(5)
  const [result, setResult] = useState<CycleData | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!lastPeriodStart) return

    const data: CycleData = {
      lastPeriodStart,
      cycleLength,
      periodLength,
    }

    saveCycleEntry(data)
    setResult(data)
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Cycle Tracker
      </h1>

      <p className="text-gray-600 mb-10">
        Log your last period to get predictions for your next cycle.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last period start date
          </label>

          <input
            type="date"
            value={lastPeriodStart}
            onChange={(e) => setLastPeriodStart(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average cycle length: {cycleLength} days
          </label>

          <input
            type="range"
            min={21}
            max={35}
            value={cycleLength}
            onChange={(e) => setCycleLength(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Average period length: {periodLength} days
          </label>

          <input
            type="range"
            min={2}
            max={10}
            value={periodLength}
            onChange={(e) => setPeriodLength(Number(e.target.value))}
            className="w-full accent-pink-500"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
            <p className="text-sm text-pink-600 font-medium mb-1">
              Next period
            </p>

            <p className="text-2xl font-bold text-gray-800">
              {formatDate(getNextPeriodDate(result))}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              in {getDaysUntil(getNextPeriodDate(result))} days
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <p className="text-sm text-purple-600 font-medium mb-1">
              Fertile window
            </p>

            <p className="text-lg font-bold text-gray-800">
              {formatDate(getFertileWindow(result).start)} –{' '}
              {formatDate(getFertileWindow(result).end)}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CycleTracker