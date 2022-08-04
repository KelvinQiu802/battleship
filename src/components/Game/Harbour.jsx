import Ship from './Ship';

const Harbour = ({
  gameState,
  p1AvaliableShips,
  setP1PlacingShip,
  p2AvaliableShips,
  setP2PlacingShip,
}) => {
  // 选择正在放置的船只
  const handleSelect = (ship) => {
    gameState.includes('p1')
      ? setP1PlacingShip({
          ...ship,
          direction: 'HORIZONTAL',
          position: {
            row: null,
            col: null,
          },
        })
      : setP2PlacingShip({
          ...ship,
          direction: 'HORIZONTAL',
          position: {
            row: null,
            col: null,
          },
        });
  };

  return (
    <div className='harbour'>
      {p1AvaliableShips.map((ship) => (
        <div
          key={ship.name}
          className='ship-container'
          onClick={() => handleSelect(ship)}
        >
          <h3 className='ship-name'>{ship.name}</h3>
          <Ship length={ship.length} />
        </div>
      ))}
    </div>
  );
};

export default Harbour;
