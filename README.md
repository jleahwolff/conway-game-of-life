### Conway's Game of Life



### About
* Framework: React Javascript
* Testing: Jest
* Styling: Material UI



### Rules
In the Game of Life, these rules examine each cell of the grid. For each
cell, it counts that cell's eight neighbors (up, down, left, right, and
diagonals), and then act on that result.

* If the cell is alive **and** has 2 or 3 neighbors, then it remains
  alive. Else it dies.
* If the cell is dead **and** has exactly 3 neighbors, then it comes to
  life. Else if remains dead.



### References
* [John Conway's Game of
Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
* [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
