// Centralized usage tracking for MindEase
// Tracks real user activity across all features

export interface UsageStats {
  chatMessages: number;
  dreamEntries: number;
  sandboxCreations: number;
  gratitudeNotes: number;
  moodEntries: number;
  sosUses: number;
  diaryEntries: number;
  daysActive: number;
  weeklyGoalsSet: number;
  lastActiveDate: string; // ISO date string
}

const STORAGE_KEY = 'mindease-usage-stats';

// Initialize with zeros - real usage tracking
const defaultStats: UsageStats = {
  chatMessages: 0,
  dreamEntries: 0,
  sandboxCreations: 0,
  gratitudeNotes: 0,
  moodEntries: 0,
  sosUses: 0,
  diaryEntries: 0,
  daysActive: 0,
  weeklyGoalsSet: 0,
  lastActiveDate: new Date().toISOString().split('T')[0]
};

export function getUsageStats(): UsageStats {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return { ...defaultStats };
    }
    return { ...defaultStats, ...JSON.parse(saved) };
  } catch (error) {
    console.warn('Failed to load usage stats:', error);
    return { ...defaultStats };
  }
}

export function setUsageStats(stats: UsageStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.warn('Failed to save usage stats:', error);
  }
}

export function incrementUsage(key: keyof Omit<UsageStats, 'lastActiveDate'>): void {
  const stats = getUsageStats();
  stats[key] = (stats[key] || 0) + 1;
  
  // Update active days if it's a new day
  const today = new Date().toISOString().split('T')[0];
  if (stats.lastActiveDate !== today) {
    stats.daysActive = (stats.daysActive || 0) + 1;
    stats.lastActiveDate = today;
  }
  
  setUsageStats(stats);
  console.log(`Usage tracked: ${key} = ${stats[key]}`);
}

// Convenience functions for specific features
export const trackChatMessage = () => incrementUsage('chatMessages');
export const trackDreamEntry = () => incrementUsage('dreamEntries');
export const trackSandboxCreation = () => incrementUsage('sandboxCreations');
export const trackGratitudeNote = () => incrementUsage('gratitudeNotes');
export const trackMoodEntry = () => incrementUsage('moodEntries');
export const trackSOSUse = () => incrementUsage('sosUses');
export const trackDiaryEntry = () => incrementUsage('diaryEntries');
export const trackWeeklyGoal = () => incrementUsage('weeklyGoalsSet');