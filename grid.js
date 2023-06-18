const GRID_SIZE = 21;

export function randomGridPostion() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(postion){
    return (
        postion.x < 1 || postion.x > 21 ||
        postion.y < 1 || postion.y > 21
    )
}
