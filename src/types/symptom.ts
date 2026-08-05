export type Mood = 'happy' | 'neutral' | 'sad' | 'anxious' | 'irritated'

export interface SymptomEntry {
  id: string
  date: string // ISO date, e.g. "2026-08-05"
  mood: Mood
  waterLiters: number
  sleepHours: number
  notes?: string
}