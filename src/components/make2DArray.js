import React from 'react';

// Grid ([2], [3])

function draw() {
  for (let i = 0; i < column; i++){
    for (let j = 0; j < row; j++){
      grid[i][j] = Math.floor(Math.random(2))
    }
}