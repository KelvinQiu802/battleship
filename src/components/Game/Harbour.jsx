import Ship from './Ship';

const Harbour = ({ p1AvaliableShips }) => {
  return (
    <div className='harbour'>
      {p1AvaliableShips.map((ship) => (
        <div key={ship.name} className='ship-container'>
          <h3 className='ship-name'>{ship.name}</h3>
          <Ship length={ship.length} />
        </div>
      ))}
    </div>
  );
};

export default Harbour;
