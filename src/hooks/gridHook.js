import React, { useState, useCallback, useRef } from 'react';
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

  const [running, setRunning] = useState(false);

  // Since useState changes and useCalllback does not, we will useRef
  // To use current value in a callback
  const runningRef = useRef(running);
  runningRef.current = running;
    c;onsole.log("logging grid", grid);
    console.table(grid)

    // useCallback makes it so its not recreated every render
    // recursive function: making sure we are running, if not, return. ()
  const runSimulation = useCallback(() => {
    // if not currently running
    if (!runningRef.current){
      // return
      return;
    }
    // simulate
    // recall every 100milsec
    setTimeout(runSimulation, 1000);
  }, [])

    return (
    <>
      <button
      onClick={() => {
        setRunning(!running);
      }}>
        {running ? 'Stop' : 'Start'}
        </button>
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
              gridCopy[i][k] = grid[i][k] ? 0 : 1;
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
        </>
    )
}

export default GridHook;