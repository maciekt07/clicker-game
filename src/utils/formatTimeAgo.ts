/**
 * Formats the time difference between the given date and the current date
 * in a human-readable format (e.g., "5d ago", "1h ago", "30m ago").
 *
 * @param {string} createdAt - The date string to calculate the time difference from.
 * @returns {string} A string representing the time difference in a human-readable format.
 */
export const formatTimeAgo = (createdAt: string): string => {
  const diffMs = Date.now() - new Date(createdAt).getTime();
  const diffDays = Math.floor(diffMs / 86400000); // 1 day = 86400000 ms
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // 1 hr = 3600000 ms
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // 1 min = 60000 ms

  if (diffDays > 0) {
    return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  } else if (diffHrs > 0) {
    return `${diffHrs} hour${diffHrs === 1 ? "" : "s"} ago`;
  } else {
    return `${diffMins} minute${diffMins === 1 ? "" : "s"} ago`;
  }
};
