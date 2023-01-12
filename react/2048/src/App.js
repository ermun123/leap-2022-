
import { prettyFormat } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [puzzle, setPuzzle] = useState([
    [4, null, null, 2], 32
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  const PuzzleRow = ({ row }) => {
    return row.map((col, index) => (
      <div key={`col-${index}`} className={`tile tile-${col}`}>
        {col}
      </div>
    ))
  };

  const moveLeft = () => {
    const newPuzzle = [];
    for (const row of puzzle) {
      const filteredCols = row.filter((col) => col !== null);
      const newRow = [];
      for (let i = filteredCols.length - 1; i >= 0; i--) {
        if (filteredCols[i] === filteredCols[i - 1]) {
          newRow.push(filteredCols[i] + filteredCols[i - 1]);
          i--;
        } else {
          if (filteredCols[i]) newRow.push(filteredCols[i]);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (!newRow[i]) newRow.push(null)
      }
      newPuzzle.push(newRow.reverse());
    }
    setPuzzle(newPuzzle);
  }


  return (
    <div className='wrapper'>
      <h1>2048 GAME</h1>
      <div className='board'>
        {puzzle.map((row, index) => (
          <PuzzleRow row={row} key={`row-${index}`} />
        ))}
      </div>
    </div>

  );
};


export default App;
