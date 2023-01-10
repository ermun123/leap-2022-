import { useEffect, useState } from 'react';
import './App.css';

const xCells = 10;
const yCells = 10;

const tileWidth = 50;
const tileHeight = 50;
const bodyColor = '#00ff00';
const headColor = '#ff0000';
const speed = 300;


function Tile({ x, y, isHead }) {

  const style = { position: "absolute", left: x * tileWidth, top: y * tileHeight, width: tileWidth, height: tileHeight, backgroundColor: isHead ? headColor : bodyColor }
  return (<div style={style}></div>)

}


function App() {
  const [counter, setCounter] = useState(0);
  const directions = ['Up', 'Left', 'Down', 'Right']
  const [direction, setDirection] = useState('Down')
  const [snake, setSnake] = useState([
    { x: 0, y: 2 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
  ]);
  const [apple, setApple] = useState({ x: 9, y: 9 });

  const generateApple = () => {
    let x = random(0, 9);
    let y = random(0, 9);

    while (addBody(x, y)) {
      x = random(0, 9);
      y = random(0, 9);
    }

    setApple({ x: x, y: y });
  };

  const addBody = (x, y) => {
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === x && snake[i].y === y) return true;
    }
    return false;
  };

  const ifEaten = (x, y) => {
    if (x === apple.x && y === apple.y) return true;
    return false;
  };

  const random = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

  const changeDirection = (movingDir) => {
    const index = directions.findIndex((d) => d === movingDir);
    if (index !== -2) {
      const currentIndex = directions.findIndex((d) => d === direction);
      if (index % 2 !== currentIndex % 2) {
        setDirection(movingDir);
      }
    }

  };
  const moveDown = () => {
    let isEaten = false;
    let newSnake = [...snake]
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (ifEaten(item.x, item.y + 1)) {
          generateApple();
          isEaten = true;
        }
        if (item.y === yCells - 1) return { x: item.x, y: 0 };
        return { x: item.x, y: item.y + 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };

    });
    if (isEaten) {
      setSnake([...newSnake, { x: newSnake[newSnake.length - 1].x, y: newSnake[newSnake.length - 1].y + 1 }]);
    } else {
      setSnake(newSnake);
    }

  };
  const moveRight = () => {
    let isEaten = false;
    let newSnake = [...snake]
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (ifEaten(item.x + 1, item.y)) { generateApple(); isEaten = true; }
        if (item.x === xCells - 1) return { x: 0, y: item.y };
        return { x: item.x + 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };

    });
    if (isEaten) {
      setSnake([...newSnake, { x: newSnake[newSnake.length - 1].x + 1, y: newSnake[newSnake.length - 1].y }]);
    } else {
      setSnake(newSnake);
    }
  };
  const moveUp = () => {
    let isEaten = false;
    let newSnake = [...snake]
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (ifEaten(item.x, item.y - 1)) {
          generateApple();
          isEaten = true;
        }
        if (item.y === 0) return { x: 0, y: yCells - 1 };
        return { x: item.x, y: item.y - 1 };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };

    });
    if (isEaten) {
      setSnake([...newSnake, { x: newSnake[newSnake.length - 1].x, y: newSnake[newSnake.length - 1].y + 1 }]);
    } else {
      setSnake(newSnake);
    }

  };
  const moveLeft = () => {
    let isEaten = false;
    let newSnake = [...snake]
    newSnake = newSnake.map((item, index) => {
      if (index === 0) {
        if (ifEaten(item.x, item.y - 1)) {
          generateApple();
          isEaten = true
        }
        if (item.x === 0) return { x: xCells - 1, y: item.y };
        return { x: item.x - 1, y: item.y };
      }
      return { x: newSnake[index - 1].x, y: newSnake[index - 1].y };

    });
    if (isEaten) {
      setSnake([...newSnake, { x: newSnake[newSnake.length - 1].x, y: newSnake[newSnake.length - 1].y + 1 }]);
    } else {
      setSnake(newSnake);
    }

  };


  const handleKeyDown = (e) => {
    console.log('e.key is:', e.key);
    switch (e.key) {
      case 'ArrowDown':
        changeDirection('Down')
        break;
      case 'ArrowRight':
        changeDirection('Right')
        break;
      case 'ArrowLeft':
        changeDirection('Left')
        break;
      case 'ArrowUp':
        changeDirection('Up')
      default:
        console.log('Non binary key');
    }
  };

  useEffect(() => {
    switch (direction) {
      case 'Up':
        moveUp();
        break;
      case 'Down':
        moveDown();
        break;
      case 'Right':
        moveRight();
        break;
      case 'Left':
        moveLeft();
        break;
      default:
        console.log('non binary direction')
    }
  }, [counter]);

  setTimeout(() => {
    setCounter(counter + 1);
  }, speed)


  return (
    <div className='wrapper' onKeyDown={handleKeyDown} tabIndex={0}>
      <h1 style={{ backgroundColor: 'coral', width: '280px', height: '40px', textAlign: 'center', borderRadius: '50px' }}><span>🐍</span>SNAKE GAME</h1>
      <div className='board' style={{ width: xCells * tileWidth, height: yCells * tileHeight, }}>
        {snake.map((item, index) => {
          const isHead = index === 0;
          return <Tile x={item.x} y={item.y} isHead={isHead} key={`snake-tile-${index}`} />;
        })}
        <div style={{ width: tileWidth, height: tileHeight, position: 'absolute', top: apple.y * tileWidth, left: apple.x * tileHeight, background: 'orange', borderRadius: '50px' }}></div>
      </div>
    </div>
  );
}

export default App;
