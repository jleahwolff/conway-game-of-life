import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import Rules from '../components/rules';

const numRows = 25;
const numCols = 50;

const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];

const generateEmptyGrid = () => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		rows.push(Array.from(Array(numCols), () => 0));
	}
	return rows;
};

// useState function, so only running once when state initialized
// ```By default, we're going to set everything to 0's or "dead"
//     so to initialize array with the "dead" zeros ->
//       * generate array, and grab the
//       * grab len of array
//   2nd param of Arr.from is mapping value & key and
//   returning what value is going to be```
const GridHook = () => {
	let count = 0;
	let countRef = useRef(count);
	countRef.current = count;
	const [generation, setGeneration] = useState(0);
	const [speed, setSpeed] = useState(false);
	const [grid, setGrid] = useState(() => {
		return generateEmptyGrid();
	});

	const genRef = useRef(generation);
	genRef.current = generation;

	const [running, setRunning] = useState(false);

	// Since useState changes and useCalllback does not, we will useRef
	// To use current value in a callback
	const runningRef = useRef(running);
	runningRef.current = running;
	// console.log('logging grid', grid);
	// console.table(grid);

	// useCallback makes it so its not recreated every render
	// recursive function: making sure we are running, if not, return. ()
	const runSimulation = useCallback(() => {
		// if not currently running
		if (!runningRef.current) {
			// return
			return;
		}
		// update values in grid & mutate
		// pass current value of grid

		setGrid((g) => {
			// Goes through current grid (g)
			return produce(g, (gridCopy) => {
				// produce will generate a new grid, gridCopy,
				// and update set grid value
				for (let i = 0; i < numRows; i++) {
					for (let k = 0; k < numCols; k++) {
						// compute # of neighbors (g) has
						let neighbors = 0;
						// compute neighbors it has
						operations.forEach(([x, y]) => {
							const newI = i + x;
							const newK = k + y;
							// Check that we don't go out of bounds
							if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
								neighbors += g[newI][newK];
							}
						});
						// Lower than 2, greater than 3, DIE
						if (neighbors < 2 || neighbors > 3) {
							gridCopy[i][k] = 0;
						} else if (g[i][k] === 0 && neighbors === 3) {
							gridCopy[i][k] = 1;
						}
					}
				}
			});
		});
		// simulate
		// recall every 1000milsec(1 sec)
		setTimeout(runSimulation, speed ? 400 : 100);
		setGeneration(genRef.current + 1);
	}, [speed]);

	const randomize = Math.random();
	function random(num) {
		if (num >= 0.8) {
			return '#246770';
		} else if (num >= 0.6) {
			return '#000000';
		} else if (num >= 0.4) {
			return '#155753';
		} else if (num >= 0.2) {
			return '#5fcfc7';
		} else {
			return '#435c5a';
		}
	}

	return (
		<>
			<div>
				<h3>Generation: {generation}</h3>
			</div>
			<div class='buttons'>
				<Rules />
				<button
					class='btn'
					onClick={() => {
						setRunning(!running);
						if (!running) {
							runningRef.current = true;
							runSimulation();
						}
					}}
				>
					{running ? 'Stop' : 'Start'}
				</button>
				<button
					class='btn'
					onClick={() => {
						setGrid(generateEmptyGrid());
						setGeneration(0);
					}}
				>
					Clear
				</button>
        <button 
          class="btn"
          onClick={() => setSpeed(!speed)}>
					{speed ? 'Fast' : 'Slow'}
				</button>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${numCols}, 20px)`,
					border: '1rem solid #246770',
				}}
			>
				{/* returning the grid. mapping the row arr, and creating a col */}
				{/* // Getting index so we can set bg color: i for row, k for col */}
				{/* Normally, you dont want to use index as key, but since the divs are unshiftable, its fine  */}
				{grid.map((rows, i) =>
					rows.map((col, k) => (
						<div
							onClick={() => {
								// Produce from immer, make an immutable change, and create new grid for us.
								const newGrid = produce(grid, (gridCopy) => {
									gridCopy[i][k] = grid[i][k] ? 0 : 1;
								});
								setGrid(newGrid);
							}}
							key={`${i} - ${k}`}
							style={{
								width: '20px',
								height: '20px',
								backgroundColor: grid[i][k] ? random(randomize) : '#faf0e8',
								border: 'solid 1px black',
							}}
						/>
					))
				)}
			</div>
		</>
	);
};

export default GridHook;
// #faf0e8 - cream
// #246770 - blue
// #db9660 - orange
