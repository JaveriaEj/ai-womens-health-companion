import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { mockCycleHistory } from '../data/mockCycleHistory'

function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-10">
        Your cycle trends over the past few months.
      </p>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Cycle Length Trend
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockCycleHistory}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f3e8ff"
            />

            <XAxis
              dataKey="month"
              stroke="#9ca3af"
            />

            <YAxis
              stroke="#9ca3af"
              domain={[20, 35]}
            />

            <Tooltip
              contentStyle={{
                borderRadius: '12px',
                border: '1px solid #f3e8ff',
              }}
            />

            <Line
              type="monotone"
              dataKey="cycleLength"
              stroke="#ec4899"
              strokeWidth={3}
              dot={{
                fill: '#ec4899',
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard