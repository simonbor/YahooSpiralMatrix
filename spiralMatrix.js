exports.solution = function (A) {
    let upperSpiral = [], sum = 0;

    // counter-clockwise rotate the matrix
    const rotateMatrix = function (inMatrix) {
        let outMatrix = [];
        for (let j = inMatrix[inMatrix.length - 1].length - 1; j >= 0; j--) {
            outMatrix[outMatrix.length] = [];
            for (let i = 0; i < inMatrix.length; i++) {
                outMatrix[outMatrix.length - 1][i] = inMatrix[i][j];
            }
        }
        return outMatrix;
    }

    // cut the matrix and combine new one dimentional array "upperSpiral"
    while (A.length > 0) {
        upperSpiral = upperSpiral.concat(A.shift());
        A.pop();
        if (A.length > 0)
            A = rotateMatrix(A);
    }

    // sigma all upperSpiral items
    upperSpiral.forEach(function (item) {
        sum += item;
    });

    return sum;
}