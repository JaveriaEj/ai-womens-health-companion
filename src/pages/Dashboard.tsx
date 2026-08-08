import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Link } from 'react-router-dom'

import {
  getCycleHistory,
  getLatestCycleEntry,
} from '../services/cycleStorage'

import { getLatestSymptomEntry } from '../services/symptomStorage'

import {
  getNextPeriodDate,
  getFertileWindow,
  getDaysUntil,
  getCurrentCycleDay,
  formatDate,
} from '../utils/cycleCalculations'

import { getMoodDisplay } from '../utils/moodHelpers'

import StatCard from '../components/StatCard'

function Dashboard() {
  const history = getCycleHistory()
  const latest = getLatestCycleEntry()
  const latestSymptom = getLatestSymptomEntry()

  const chartData = history.map((entry) => ({
    date: new Date(entry.loggedAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    }),
    cycleLength: entry.cycleLength,
  }))

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blush to-rose/40 rounded-card p-8 mb-8 shadow-sm border border-blush">
        <h1 className="font-heading text-3xl font-bold mb-2 text-wine">Welcome Back 🌸</h1>
        <p className="text-wine/70">
          {latest
            ? "Here's where you're at in your cycle today."
            : 'Log your first cycle to unlock personalized insights.'}
        </p>
      </div>

      {latest ? (
        <>
          {/* Cycle Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            <StatCard
              icon="📅"
              label="Cycle Day"
              value={`Day ${getCurrentCycleDay(latest.lastPeriodStart)}`}
              accent="pink"
            />

            <StatCard
              icon="⏳"
              label="Next Period"
              value={`${getDaysUntil(getNextPeriodDate(latest))} days`}
              accent="purple"
            />

            <StatCard
              icon="🌷"
              label="Fertile Window"
              value={formatDate(getFertileWindow(latest).start)}
              accent="blue"
            />

            <StatCard
              icon="🔄"
              label="Cycle Length"
              value={`${latest.cycleLength} days`}
              accent="pink"
            />
          </div>

          {/* Symptom Statistics — only shows if user has logged a check-in */}
          {latestSymptom && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <StatCard
                icon={getMoodDisplay(latestSymptom.mood).split(' ')[0]}
                label="Latest Mood"
                value={getMoodDisplay(latestSymptom.mood).split(' ')[1]}
                accent="pink"
              />
              <StatCard
                icon="💧"
                label="Water Intake"
                value={`${latestSymptom.waterLiters.toFixed(1)} L`}
                accent="blue"
              />
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-card p-12 text-center border border-blush shadow-sm mb-10">
          <div className="text-5xl mb-4">📊</div>

          <h2 className="font-heading text-xl font-semibold text-wine mb-2">No Cycle Data Yet</h2>

          <p className="text-taupe mb-6">
            Start tracking your first period to unlock personalized insights and beautiful statistics.
          </p>

          <Link
            to="/cycle-tracker"
            className="inline-block bg-wine hover:bg-wine-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Start Tracking
          </Link>
        </div>
      )}

      {/* Chart */}
      <div className="bg-white/70 backdrop-blur-sm rounded-card p-6 shadow-sm border border-blush">
        <h2 className="font-heading text-xl font-semibold text-wine mb-5">Cycle Length Trend</h2>

        {chartData.length === 0 ? (
          <p className="text-center py-16 text-taupe">Log your first cycle to see your trends here.</p>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FBE4EC" />
              <XAxis dataKey="date" stroke="#8B7355" />
              <YAxis stroke="#8B7355" domain={[20, 35]} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #FBE4EC' }} />
              <Line
                type="monotone"
                dataKey="cycleLength"
                stroke="#6B2737"
                strokeWidth={3}
                dot={{ fill: '#6B2737', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default Dashboard