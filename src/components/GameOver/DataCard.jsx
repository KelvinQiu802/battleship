import * as BLOCK_STATE from '../../utils/blockStates';

const DataCatd = ({ name, attack }) => {
  const numberOfAttack = attack.length - 1;
  const numberOfHit =
    attack.filter((item) => item.state !== BLOCK_STATE.MISS).length - 1;
  const numberOfMiss = attack.filter(
    (item) => item.state === BLOCK_STATE.MISS
  ).length;
  const hitRate = ((numberOfHit / numberOfAttack) * 100).toFixed(0);

  return (
    <div className='data-card'>
      <h1 className='data-player'>{name}</h1>
      <p>攻击次数: {numberOfAttack}</p>
      <p>命中次数: {numberOfHit}</p>
      <p>未命中次数: {numberOfMiss}</p>
      <p>命中率: {hitRate}%</p>
    </div>
  );
};

export default DataCatd;
