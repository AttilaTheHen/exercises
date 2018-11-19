const { wordCounter, wordReducer } = require('./wordCount');

const str = 'The quick brown fox jumps over the lazy dog';

wordCounter(str);
wordReducer(str);