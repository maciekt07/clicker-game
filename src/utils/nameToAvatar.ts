/**
 * Returns the initials of a name to be used as an avatar.
 *
 * @param {string | null} name The name to get the initials from.
 * @returns {string | null} The initials of the name in uppercase.
 */
export const nameToAvatar = (name: string | null): string | null => {
  if (name === null) {
    return null;
  }
  const words = name.split(" ");
  const initials = words
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return initials;
};
