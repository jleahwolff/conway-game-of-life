// import Make2DArray from "../components/make2DArray.js";
import React from 'react';


function Make2DArray(column, row) {
	let arr = new Array(column);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(row);
	}
	return arr;
}

let grid;
let column = 25;
let row = 25;

function Setup() {

  grid = Make2DArray(column, row);
  for (let i = 0; i < column; i++){
    for (let j = 0; j < row; j++){
      grid[i][j] = Math.floor(Math.random(2))
    }
  }
  return grid
}

export default Setup;