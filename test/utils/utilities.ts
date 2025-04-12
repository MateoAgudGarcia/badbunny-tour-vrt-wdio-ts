/**
 * Converts a URL path into a tag label by removing the first character and replacing slashes with hyphens
 * @param {string} url - The URL path string to convert
 * @returns {string} The formatted tag label string
 */
export function tagLabel(url: string): string {
  return url.slice(1).replace('/', '-');
}

/**
 * Converts a CSS selector into a hyphenated string
 * @param {string} selector - The CSS selector to convert
 * @returns {string} The hyphenated string
 */
export function selectorTag(selector: string): string {
  return selector
    .replace(/\s+/g, '-')
    .replace(/\./g, '-')
    .replace(/\s*>\s*/g, '-')
    .replace(/--+/g, '-')
    .trim();
}
