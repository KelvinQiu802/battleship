const MiniBoard = ({ finalBoard, name }) => {
  return (
    <div className='mini-board-container'>
      <h2 className='mini-name'>{name}</h2>
      <div className='mini-board' onContextMenu={(e) => e.preventDefault()}>
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
