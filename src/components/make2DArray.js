import React from 'react';

// Grid ([2], [3])

function Make2DArray(column, row) {
	let arr = new Array(column);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(row);
	}
	return arr;
}

export default Make2DArray;