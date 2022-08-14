import * as BLOCK_STATE from '../../utils/blockStates';
import { FormattedMessage } from 'react-intl';

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
      <p>
        <FormattedMessage
          id='over.numberOfAttack'
          defaultMessage="Number of Attack:"
        />
        {numberOfAttack}
      </p>
      <p>
        <FormattedMessage
          id='over.numberOfHit'
          defaultMessage="Number of Hit:"
        />
        {numberOfHit}
      </p>
      <p>
        <FormattedMessage
          id='over.numberOfMiss'
          defaultMessage="Number of Miss:"
        />
        {numberOfMiss}
      </p>
      <p>
        <FormattedMessage
          id='over.hitRate'
          defaultMessage="Hit Rate:"
        />
        {hitRate}%
      </p>
    </div>
  );
};

export default DataCatd;
