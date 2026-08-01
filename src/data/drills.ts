import type { DrillCard } from './types'
import { l1Drills } from './drill_l1'
import { l2Drills } from './drill_l2'
import { l34Drills } from './drill_l34'

export const drills: readonly DrillCard[] = [...l1Drills, ...l2Drills, ...l34Drills]
