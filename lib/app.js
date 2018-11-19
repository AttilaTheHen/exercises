/* eslint no-console: off */
const { wordCounter, wordReducer } = require('./wordCount');

const str = 'The quick brown fox jumps over the lazy dog';

console.log(wordCounter(str));
console.log(wordReducer(str));