import type { SymptomEntry, Mood } from '../types/symptom'

const STORAGE_KEY = 'herhealth_symptom_log'

export function getSymptomHistory(): SymptomEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveSymptomEntry(mood: Mood, waterLiters: number, sleepHours: number, notes?: string): void {
  const history = getSymptomHistory()
  const newEntry: SymptomEntry = {
    id: Date.now().toString(),
    date: new Date().toISOString().split('T')[0],
    mood,
    waterLiters,
    sleepHours,
    notes,
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...history, newEntry]))
}

export function getLatestSymptomEntry(): SymptomEntry | null {
  const history = getSymptomHistory()
  if (history.length === 0) return null
  return history[history.length - 1]
}
