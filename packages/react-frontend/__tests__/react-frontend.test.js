'use strict';

const reactFrontend = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactFrontend(), 'Hello from reactFrontend');
console.info('reactFrontend tests passed');
