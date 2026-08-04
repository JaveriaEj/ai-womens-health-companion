export interface CycleData {
  lastPeriodStart: string // ISO date string, e.g. "2026-07-15"
  cycleLength: number // average days between periods, typically 21-35
  periodLength: number // typical days period lasts, usually 3-7
}