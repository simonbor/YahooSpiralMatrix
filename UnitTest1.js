const assert = require('assert');
const spiralMatrix = require('./spiralMatrix.js');

exports['The task matrix'] = function () {
    const orgMatrix = [
        [5, 3, 8, 9, 4, 1, 3, - 2],
        [4, 6, 0, 3, 6, 4, 2, 1],
        [4, -5, 3, 1, 9, 5, 6, 6],
        [3, 7, 5, 3, 2, 8, 9, 4],
        [5, 3, -3, 6, 3, 2, 8, 0],
        [5, 7, 5, 3, 3, -9, 2, 2],
        [0, 4, 3, 2, 5, 7, 5, 4]
    ];

    assert.equal(spiralMatrix.solution(orgMatrix), 91, "should be equal");
}

exports['Custom matrix'] = function () {
    const custMatrix = [
        [1,2,3],
        [4,2147483647,6],
        [7,8,9]
    ];

    assert.equal(spiralMatrix.solution(custMatrix), 2147483659, "should be equal");
}
