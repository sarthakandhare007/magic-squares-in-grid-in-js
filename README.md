# magic-squares-in-grid-in-js
Here is a **clean and interview-ready JavaScript solution** for **LeetCode 840 – Magic Squares in Grid** 👇

---

## ✅ Key Idea (Short & Clear)

A **3×3 magic square** must satisfy:

1. Contains **all numbers from 1 to 9 exactly once**
2. **All rows, columns, and both diagonals** have the **same sum**
3. The **center must be 5** (property of all 3×3 magic squares)

We slide a **3×3 window** over the grid and validate each one.

---

## 🧠 Optimizations Used

* Early rejection if center ≠ 5
* Use a `Set` to check uniqueness of numbers 1–9
* Direct sum comparison (no extra arrays)

---

## 💻 JavaScript Solution

```js
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
```

---

## ⏱ Time & Space Complexity

* **Time:** `O(m × n)`
* **Space:** `O(1)` (fixed-size checks)

---

## 🧪 Example

```js
Input:
[
 [4,3,8,4],
 [9,5,1,9],
 [2,7,6,2]
]

Output:
1
```

---
