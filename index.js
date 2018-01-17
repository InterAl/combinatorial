const _ = require('lodash');

function calcPerms(items, divisor) {
    if (items.length === 0)
        return [Array(divisor).fill().map(() => [])];

    const result = calcPerms(items.slice(1), divisor);
    const el = items[0];
    const newPerms = [];
    result.forEach(perm => {
        perm.map((d, idx) => {
            const newPerm = JSON.parse(JSON.stringify(perm));
            newPerm[idx].push(el);
            newPerms.push(newPerm);
        });
    });

    return newPerms;
}

function egalitarianDivision(items, divisor) {
    function standardDeviation(arr) {
        const avg = _.sum(arr) / arr.length;
        return Math.sqrt(_.sum(_.map(arr, (i) => Math.pow((i - avg), 2))) / arr.length);
    };

    const perms = calcPerms(Object.keys(items), divisor);
    return _.minBy(perms, perm => {
        const v = perm.map(d => _.sum(d.map(i => items[i])));
        return standardDeviation(v);
    });
}

exports.calcPerms = calcPerms;
exports.egalitarianDivision = egalitarianDivision;
