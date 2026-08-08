interface StatCardProps {
  icon: string
  label: string
  value: string
  accent: 'pink' | 'purple' | 'blue'
}

interface StatCardProps {
  icon: string
  label: string
  value: string
  accent: 'pink' | 'purple' | 'blue'
}

const accentStyles = {
  pink: 'bg-blush text-wine border-blush',
  purple: 'bg-rose/20 text-wine border-rose/30',
  blue: 'bg-sage/20 text-wine border-sage/40',
}

function StatCard({ icon, label, value, accent }: StatCardProps) {
  return (
    <div className={`rounded-card p-5 border ${accentStyles[accent]}`}>
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-sm font-medium opacity-70">{label}</p>
      <p className="font-heading text-xl font-bold mt-1">{value}</p>
    </div>
  )
}

export default StatCard