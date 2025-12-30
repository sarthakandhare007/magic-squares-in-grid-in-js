var numMagicSquaresInside = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    // Helper function to check if 3x3 grid is magic
    function isMagic(r, c) {
        // Center must be 5
        if (grid[r + 1][c + 1] !== 5) return false;

        let seen = new Set();

        // Check numbers 1 to 9 uniqueness
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                let val = grid[i][j];
                if (val < 1 || val > 9 || seen.has(val)) return false;
                seen.add(val);
            }
        }

        let sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

        // Rows
        for (let i = 0; i < 3; i++) {
            let rowSum = grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2];
            if (rowSum !== sum) return false;
        }

        // Columns
        for (let j = 0; j < 3; j++) {
            let colSum = grid[r][c + j] + grid[r + 1][c + j] + grid[r + 2][c + j];
            if (colSum !== sum) return false;
        }

        // Diagonals
        let diag1 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
        let diag2 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c];
        if (diag1 !== sum || diag2 !== sum) return false;

        return true;
    }

    // Slide 3x3 window
    for (let i = 0; i <= rows - 3; i++) {
        for (let j = 0; j <= cols - 3; j++) {
            if (isMagic(i, j)) count++;
        }
    }

    return count;
};
