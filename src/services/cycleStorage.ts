import type { CycleData } from '../types/cycle'

const STORAGE_KEY = 'herhealth_cycle_history'

export interface StoredCycleEntry extends CycleData {
  id: string
  loggedAt: string // when this entry was saved
}

export function getCycleHistory(): StoredCycleEntry[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveCycleEntry(data: CycleData): void {
  const history = getCycleHistory()
  const newEntry: StoredCycleEntry = {
    ...data,
    id: Date.now().toString(),
    loggedAt: new Date().toISOString(),
  }
  const updated = [...history, newEntry]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
}

export function getLatestCycleEntry(): StoredCycleEntry | null {
  const history = getCycleHistory()
  if (history.length === 0) return null
  return history[history.length - 1]
}