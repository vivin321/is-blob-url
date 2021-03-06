// Spec: https://www.w3.org/TR/FileAPI/#DefinitionOfScheme
const REGEXP_BLOB_URL = /^blob:.+\/[\w-]{36,}(#.+)?$/;

/**
 * Check if the given value is a Blob URL.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given is a Blob URL, else `false`.
 * @example
 * isBlobURL('blob:https://example.org/9115d58c-bcda-ff47-86e5-083e9a215304')
 * // => true
 * @example
 * isBlobURL('blob:foo')
 * // => false
 */
export default function isBlobURL(value) {
  return REGEXP_BLOB_URL.test(value);
}
