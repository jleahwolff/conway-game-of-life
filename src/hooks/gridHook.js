import React, { useState } from 'react';
import produce from 'immer';


const numRows = 25;
const numCols = 25;

// useState function, so only running once when state initialized
// ```By default, we're going to set everything to 0's or "dead"
//     so to initialize array with the "dead" zeros -> 
//       * generate array, and grab the
//       * grab len of array
//   2nd param of Arr.from is mapping value & key and 
//   returning what value is going to be```
const GridHook = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
    console.log("logging grid", grid);
    console.table(grid);

    return (
    <div style = {{
      display: 'grid',
      gridTemplateColumns: `repeat(${numCols}, 20px)`
    }}>
      {/* returning the grid. mapping the row arr, and creating a col */}
      {/* // Getting index so we can set bg color: i for row, k for col */}
      {/* Normally, you dont want to use index as key, but since the divs are unshiftable, its fine  */}
      {grid.map((rows, i) =>
        rows.map((col, k) => 
        <div 
        onClick ={() => {
          // Producde from immer, make an immutable change, and create new grid for us.
          const newGrid = produce(grid, gridCopy => {
            gridCopy[i][k] = 1;
          })
          setGrid(newGrid);
        }}
        key = {`${i} - ${k}`}
        style={{width: '20px', 
          height: '20px', backgroundColor: grid[i][k] ? 'pink' : 'blue',
          border: 'solid 1px black'
        }} /> )
      )}
        </div>
    )
}

export default GridHook;