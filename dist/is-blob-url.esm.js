/*!
 * isBlobURL v1.0.0
 * https://github.com/fengyuanchen/is-blob-url
 *
 * Copyright (c) 2017 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2017-07-25T11:06:11.484Z
 */

// Spec: https://www.w3.org/TR/FileAPI/#DefinitionOfScheme
var REGEXP_BLOB_URL = /^blob:.+\/[\w-]{36,}(#.+)?$/;

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
function isBlobURL(value) {
  return REGEXP_BLOB_URL.test(value);
}

export default isBlobURL;
