import type { Mood } from '../types/symptom'

const moodDisplay: Record<Mood, string> = {
  happy: '😊 Happy',
  neutral: '😐 Neutral',
  sad: '😢 Sad',
  anxious: '😰 Anxious',
  irritated: '😤 Irritated',
}

export function getMoodDisplay(mood: Mood): string {
  return moodDisplay[mood]
}