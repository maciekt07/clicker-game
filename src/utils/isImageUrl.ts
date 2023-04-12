/**
 * Determines whether a given URL is an image URL.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} True if the URL points to an image file (JPEG, PNG, GIF, or WebP), false otherwise.
 */
export const isImageUrl = (url: string): boolean => {
  const extension = url
    .split(/[?#]/)[0] // Remove query parameters and hashes
    .split(".")
    .pop()
    ?.toLowerCase();
  return (
    extension === "jpeg" ||
    extension === "jpg" ||
    extension === "png" ||
    extension === "gif" ||
    extension === "webp"
  );
};
