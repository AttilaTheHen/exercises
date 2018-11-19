/* eslint no-console: off */

// Make a fn that takes a long string and returns the number of times
// each word occurred in the string.

const str = 'The quick brown fox jumps over the lazy dog';

const wordCounter = (string) => {
    const dict = {};
    const words = string.toLowerCase().split(' ');

    words.forEach(word => dict[word]++ ? dict[word] : dict[word] = 1);
    console.log(dict);
};

wordCounter(str);