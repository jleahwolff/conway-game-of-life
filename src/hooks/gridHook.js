import React, { useState } from 'react';


const numRows = 25;
const numCols = 25;

const GridHook = () => {
  // useState function, so only running once when state initialized
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++){
    // ```By default, we're going to set everything to 0's or "dead"
    //     so to initialize array with the "dead" zeros -> 
    //       * generate array, and grab the
    //       * grab len of array
    //   2nd param of Arr.from is mapping value & key and 
    //   returning what value is going to be```
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
    console.log("logging grid", grid);
    console.table(grid);

    return <div>Grid function</div>
}

export default GridHook;