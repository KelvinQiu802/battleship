const MiniBoard = ({ finalBoard, name, player }) => {
  return (
    <div className='mini-board-container'>
      <h2
        className={`mini-name ${
          player === 'p1' ? 'mini-name-p1' : 'mini-name-p2'
        }`}
      >
        {name}
      </h2>
      <div
        className={`mini-board ${
          player === 'p1' ? 'mini-board-p1' : 'mini-board-p2'
        }`}
        onContextMenu={(e) => e.preventDefault()}
      >
        {finalBoard.current.map((state, index) => (
          <div
            key={index}
            className={`block mini ${state}`}
            data-index={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MiniBoard;
