import React from 'react';
import './Cover.css';
import Screen from '../Components/Screen/Screen';
import Case from '../Components/Case/Case';
import Button from '../Components/Button/Button';
import TriangleButton from '../Components/TriangleButton/TriangleButton';

const moveUp = () => console.log('Move Up');
const moveDown = () => console.log('Move Down');
const moveLeft = () => console.log('Move Left');
const moveRight = () => console.log('Move Right');
  
const Cover = () => {
  return (
    <div className="cover-container">
      <Case>
        <div className = "screen-cont">
        <Screen />
        </div>
        <div className='controls'>
          <div className="movement-controls">
            <TriangleButton direction="up" onClick={moveUp} />
            <div className="horizontal-controls">
              <TriangleButton direction="left" onClick={moveLeft} />
              <TriangleButton direction="right" onClick={moveRight} />
            </div>
            <TriangleButton direction="down" onClick={moveDown} />
          </div>
        </div>
      </Case>
    </div>
  );
};

export default Cover;


