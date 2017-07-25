var assert = require('assert');
var isBlobURL = require('./');

it('should return true if it is a Blob URL', function () {
  assert(isBlobURL('blob:https://example.org/9115d58c-bcda-ff47-86e5-083e9a215304'));
});

it('should return false if it is not a Blob URL', function () {
  assert(!isBlobURL('blob:foo'));
});
