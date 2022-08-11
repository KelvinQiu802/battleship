import MiniBoard from './MiniBoard';

const GameOver = ({ gameState, formData, p1FinalBoard, p2FinalBoard }) => {
  const winner = gameState.includes('p1') ? formData.p1Name : formData.p2Name;
  return (
    <div className='over area'>
      <h1 className='over-title'>游戏结束</h1>
      <h2 className='over-winner'>{`赢家是: ${winner}`}</h2>
      <main className='over-show'>
        <div className='show-data'></div>
        <div className='show-board'>
          <MiniBoard finalBoard={p1FinalBoard} name={formData.p1Name} />
          <MiniBoard finalBoard={p2FinalBoard} name={formData.p2Name} />
        </div>
      </main>
    </div>
  );
};

export default GameOver;
