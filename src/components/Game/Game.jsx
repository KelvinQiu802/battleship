import Header from '../Header';
import Board from './Board';
import Harbour from './Harbour';

const Game = () => {
  // 玩家数据
  const [p1AvaliableShips, setP1AvaliableShips] = React.useState([
    SHIPS.CARRIER,
    SHIPS.BATTLESHIP,
    SHIPS.DESTROYER,
    SHIPS.SUBMARINE,
    SHIPS.PATROL,
  ]);
  const [p1PlacingShip, setP1PlacingSHip] = React.useState(null);
  const [p1PlacedShip, setP1PlacedShip] = React.useState([]);

  return (
    <div className='game'>
      <Header />
      <main className='area game-area'>
        <Board />
        <Harbour />
        <Board />
      </main>
    </div>
  );
};

export default Game;
