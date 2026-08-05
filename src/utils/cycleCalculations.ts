import type { CycleData } from '../types/cycle'

export function getNextPeriodDate(data: CycleData): Date {
  const lastStart = new Date(data.lastPeriodStart)
  const nextStart = new Date(lastStart)
  nextStart.setDate(lastStart.getDate() + data.cycleLength)
  return nextStart
}

export function getFertileWindow(data: CycleData): { start: Date; end: Date } {
  const nextPeriod = getNextPeriodDate(data)
  // Ovulation typically occurs ~14 days before next period
  const ovulationDate = new Date(nextPeriod)
  ovulationDate.setDate(nextPeriod.getDate() - 14)

  const fertileStart = new Date(ovulationDate)
  fertileStart.setDate(ovulationDate.getDate() - 5)

  const fertileEnd = new Date(ovulationDate)
  fertileEnd.setDate(ovulationDate.getDate() + 1)

  return { start: fertileStart, end: fertileEnd }
}

export function getDaysUntil(targetDate: Date): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(targetDate)
  target.setHours(0, 0, 0, 0)
  const diffTime = target.getTime() - today.getTime()
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
export function getCurrentCycleDay(lastPeriodStart: string): number {
  const start = new Date(lastPeriodStart)
  start.setHours(0, 0, 0, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diffTime = today.getTime() - start.getTime()
  const dayNumber = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1
  return dayNumber > 0 ? dayNumber : 1
}