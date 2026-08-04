export interface CycleHistoryEntry {
  month: string
  cycleLength: number
  periodLength: number
}

export const mockCycleHistory: CycleHistoryEntry[] = [
  { month: 'Mar', cycleLength: 28, periodLength: 5 },
  { month: 'Apr', cycleLength: 27, periodLength: 6 },
  { month: 'May', cycleLength: 29, periodLength: 5 },
  { month: 'Jun', cycleLength: 26, periodLength: 5 },
  { month: 'Jul', cycleLength: 28, periodLength: 4 },
]