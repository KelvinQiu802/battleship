const Ship = ({ length }) => {
  return (
    <div className='harbour-ship'>
      {[...new Array(length)].map((item, index) => (
        <div key={index} className='ship-unit'></div>
      ))}
    </div>
  );
};

export default Ship;
