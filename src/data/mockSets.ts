import type { MockSet } from './types'

// 5 mock sets in the real Quiz 1 format (10 MCQ + 5 short answers), curated from the
// in-scope bank with a fixed seed; no question appears in more than one set.
export const mockSets: readonly MockSet[] = [
  { id: 1, title: 'Mock Set 1', mcqIds: ['cq11', 'cq6', 'l2q7', 'l2q9', 'q39', 'q4', 'q64', 'q29', 'q77', 'q47'], drillIds: ['d111', 'd103', 'd13', 'd10', 'd23'] },
  { id: 2, title: 'Mock Set 2', mcqIds: ['cq1', 'cq4', 'l2q12', 'l2q11', 'q1', 'q42', 'q21', 'q26', 'q61', 'q54'], drillIds: ['d118', 'd107', 'd14', 'd6', 'd25'] },
  { id: 3, title: 'Mock Set 3', mcqIds: ['cq10', 'cq7', 'l2q14', 'l2q2', 'q9', 'q8', 'q32', 'q27', 'q57', 'q62'], drillIds: ['d110', 'd102', 'd15', 'd4', 'd24'] },
  { id: 4, title: 'Mock Set 4', mcqIds: ['cq3', 'cq9', 'l2q10', 'l2q3', 'q41', 'q5', 'q36', 'q25', 'q56', 'q48'], drillIds: ['d112', 'd104', 'd16', 'd9', 'd21'] },
  { id: 5, title: 'Mock Set 5', mcqIds: ['cq12', 'cq8', 'l2q16', 'l2q4', 'q45', 'q18', 'q23', 'q24', 'q69', 'q50'], drillIds: ['d105', 'd108', 'd18', 'd8', 'd27'] },
]
