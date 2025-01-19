import React, { useState } from 'react';
import styled from "styled-components";
import { ReactComponent as Game3Page } from "../../../assets/game/game3/game3_background.svg";
import { ReactComponent as AbbamonCar } from "../../../assets/game/game3/abbamon_car.svg";
import { ReactComponent as AbbamonCar2 } from "../../../assets/game/game3/abbamon_car_2.svg";
import { ReactComponent as Car1 } from "../../../assets/game/game3/car1.svg";
import { ReactComponent as Car2 } from "../../../assets/game/game3/car2.svg";
import { ReactComponent as Car3 } from "../../../assets/game/game3/car3.svg";
import { ReactComponent as Car4 } from "../../../assets/game/game3/car4.svg";
import { ReactComponent as Car5 } from "../../../assets/game/game3/car5.svg";
import { ReactComponent as Car6 } from "../../../assets/game/game3/car6.svg";
import { ReactComponent as Car7 } from "../../../assets/game/game3/car7.svg";
import { ReactComponent as Car8 } from "../../../assets/game/game3/car8.svg";
import { ReactComponent as Car9 } from "../../../assets/game/game3/car9.svg";

const initialCars = [
    { id: 'abbamon', Component: AbbamonCar, x: 0, y: 3, length: 2, horizontal: true, width: 200, height: 100 },
    { id: 'car1', Component: AbbamonCar, x: 0, y: 0, length: 2, horizontal: true, width: 200, height: 80 },
    { id: 'car2', Component: AbbamonCar, x: 1, y: 0, length: 2, horizontal: true, width: 200, height: 80 },
    { id: 'car3', Component: AbbamonCar, x: 3, y: 2, length: 2, horizontal: true, width: 200, height: 80 },
    { id: 'car4', Component: AbbamonCar, x: 2, y: 4, length: 2, horizontal: true, width: 200, height: 80 },
    { 
      id: 'car5', 
      Component: AbbamonCar2, 
      x: 4, 
      y: 1, 
      length: 2, 
      horizontal: false, 
      width: 200, 
      height: 80, 
      style: { 
        transform: 'rotate(90deg)', 
        transformOrigin: 'center',  // 회전 기준점을 중앙으로 설정
        position: 'absolute',
        left: 'calc(4 * 200px)',  // 회전된 위치 수동 조정 (예시)
        top: 'calc(1 * 80px)'
      }
    },
    { 
      id: 'car6', 
      Component: AbbamonCar2, 
      x: 5, 
      y: 0, 
      length: 2, 
      horizontal: false, 
      width: 200, 
      height: 80, 
      style: { 
        transform: 'rotate(90deg)', 
        transformOrigin: 'center', 
        position: 'absolute',
        left: 'calc(5 * 200px)',  // 회전된 위치 수동 조정 (예시)
        top: 'calc(0 * 80px)'
      }
    },
    { 
      id: 'car8', 
      Component: AbbamonCar2, 
      x: 4, 
      y: 4, 
      length: 2, 
      horizontal: false, 
      width: 200, 
      height: 80, 
      style: { 
        transform: 'rotate(90deg)', 
        transformOrigin: 'center', 
        position: 'absolute',
        left: 'calc(4 * 200px)',  // 회전된 위치 수동 조정 (예시)
        top: 'calc(4 * 80px)'
      }
    },
    { id: 'car7', Component: AbbamonCar, x: 2, y: 5, length: 2, horizontal: true, width: 200, height: 80 },
    { id: 'car9', Component: AbbamonCar, x: 5, y: 3, length: 2, horizontal: true, width: 200, height: 80 }
  ];
  
  
  

const Game3Main = () => {
  const [cars, setCars] = useState(initialCars);
  const [draggingCar, setDraggingCar] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event, id) => {
    const car = cars.find(car => car.id === id);
    setDraggingCar(id);
    setOffset({ x: event.clientX - car.x * 100, y: event.clientY - car.y * 100 });
  };

  const handleMouseMove = (event) => {
    if (!draggingCar) return;

    setCars(prevCars => prevCars.map(car => {
      if (car.id === draggingCar) {
        let newX = car.horizontal ? Math.round((event.clientX - offset.x) / 100) : car.x;
        let newY = car.horizontal ? car.y : Math.round((event.clientY - offset.y) / 100);

        newX = Math.max(0, Math.min(6 - car.length, newX));
        newY = Math.max(0, Math.min(6 - car.length, newY));

        return { ...car, x: newX, y: newY };
      }
      return car;
    }));
  };

  const handleMouseUp = () => {
    setDraggingCar(null);
  };

  return (
    <GameContainer onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <Game3PageWrapper>
        <Game3Page />
        <GameBoard>
          {[...Array(36)].map((_, index) => (
            <GridCell key={index} />
          ))}
          {cars.map(({ id, Component, x, y, length, horizontal }) => (
            <Car 
              key={id} 
              x={x} 
              y={y} 
              length={length} 
              horizontal={horizontal} 
              onMouseDown={(event) => handleMouseDown(event, id)}
            >
              <Component />
            </Car>
          ))}
        </GameBoard>
      </Game3PageWrapper>
    </GameContainer>
  );
};

export default Game3Main;

const GameContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../../assets/game/game3/game3_background.svg') no-repeat center center/cover;
`;

const Game3PageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameBoard = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  background-color: #ccc;
  border: 5px solid #999;
  gap: 2px;
`;

const GridCell = styled.div`
  background-color: #bbb;
  width: 100%;
  height: 100%;
`;

const Car = styled.div`
  position: absolute;
  left: ${({ x }) => x * 100}px;
  top: ${({ y }) => y * 100}px;
  width: ${({ horizontal, length }) => (horizontal ? length * 100 : 100)}px;
  height: ${({ horizontal, length }) => (horizontal ? 100 : length * 100)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  user-select: none;
`;
