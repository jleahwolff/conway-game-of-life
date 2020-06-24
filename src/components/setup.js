// import Make2DArray from "../components/make2DArray.js";

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
  console.log("The grid", grid);
  console.table("table of grid", grid);
  return grid;
}

export default Setup;