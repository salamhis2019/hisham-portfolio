/**
 * Stats labels constants for consistent labeling across the application
 */
export const STATS_LABELS = {
  TECHNICAL_SKILLS: 'Technical Skills',
  SOFT_SKILLS: 'Soft Skills',
  STORY_CHAPTERS: 'Story Chapters',
} as const;

/**
 * Type for stats label keys
 */
export type StatsLabelKey = keyof typeof STATS_LABELS;
