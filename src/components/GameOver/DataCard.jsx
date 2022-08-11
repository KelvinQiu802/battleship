import * as BLOCK_STATE from '../../utils/blockStates';
const DataCatd = ({ name, attack }) => {
  const numberOfAttack = attack.length - 1;
  const numberOfHit = attack.filter(
    (item) => item.state !== BLOCK_STATE.MISS
  ).length;
  const numberOfMiss = attack.filter(
    (item) => item.state === BLOCK_STATE.MISS
  ).length;
  const hitRate = (numberOfHit / numberOfAttack).toFixed(2) * 100;

  return (
    <div>
      {name}|{numberOfAttack}|{numberOfHit}|{numberOfMiss}|{hitRate}%
    </div>
  );
};

export default DataCatd;
