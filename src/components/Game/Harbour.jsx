import { P1PLACING } from '../../utils/gameState';
import Ship from './Ship';

const Harbour = ({
  gameState,
  p1PlacingShip,
  p1AvaliableShips,
  setP1PlacingShip,
  p2PlacingShip,
  p2AvaliableShips,
  setP2PlacingShip,
}) => {
  const isP1 = gameState.includes('p1');
  const placingShip = isP1 ? p1PlacingShip : p2PlacingShip;
  const setPlacingShip = isP1 ? setP1PlacingShip : setP2PlacingShip;
  const avaliableShips = isP1 ? p1AvaliableShips : p2AvaliableShips;

  // 选择正在放置的船只
  const handleSelect = (ship) => {
    setPlacingShip({
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
      {avaliableShips.map((ship) => (
        <div
          key={ship.name}
          className={`ship-container ${
            placingShip?.name === ship.name ? 'ship-selected' : ''
          }`}
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
