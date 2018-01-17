const _ = require('lodash');

const egalitarianDivision = require('./index').egalitarianDivision;

const items = {
    'a': 1,
    'b': 9,
    'c': 6,
    'd': 15,
    'e': 22,
    'f': 11,
    'g': 3,
    'h': 7,
    'i': 8
};

const result = egalitarianDivision(items, 4);

const resultExtended = result.reduce((acc, cur, idx) => {
    acc[idx] = {
        items: cur,
        sum: _.sum(cur.map(i => items[i]))
    };

    return acc;
}, {});

console.log(resultExtended);
