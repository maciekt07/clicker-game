/**
 * Determines whether a given URL is an image URL.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL starts with https://"
 */
export const isImageUrl = (url: string): boolean => {
  return url.startsWith("https://");
};
