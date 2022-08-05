const GameOver = ({ gameState, formData }) => {
  const winner = gameState.includes('p1') ? formData.p1Name : formData.p2Name;
  return (
    <div className='over'>
      <h1 className='over-title'>游戏结束</h1>
      <h2 className='over-winner'>{`赢家是: ${winner}`}</h2>
    </div>
  );
};

export default GameOver;
