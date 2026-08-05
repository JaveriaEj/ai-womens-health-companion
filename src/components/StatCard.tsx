interface StatCardProps {
  icon: string
  label: string
  value: string
  accent: 'pink' | 'purple' | 'blue'
}

const accentStyles = {
  pink: 'bg-pink-50 text-pink-600 border-pink-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-100',
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
}

function StatCard({ icon, label, value, accent }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-5 border ${accentStyles[accent]}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm font-medium opacity-70">{label}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  )
}

export default StatCard