module.exports = function solveSudoku(matrix) {
    function check(matrix, col, row, number) {
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][col] == number || matrix[row][i] == number)
                return false;
        }
        for (let i = row - row % 3; i < row - row % 3 + 3; i++)
            for (let j = col - col % 3; j < col - col % 3 + 3; j++)
                if (matrix[i][j] == number)
                    return false;
        return true;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] == 0) {
                for (let number = 1; number < 10; number++) {
                    if (check(matrix, col, row, number)) {
                        matrix[row][col] = number;
                        if (solveSudoku(matrix))
                            return matrix;
                        matrix[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}
