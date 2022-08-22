const MiniBoard = ({ finalBoard, name, player }) => {
  return (
    <div className='mini-board-container'>
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
