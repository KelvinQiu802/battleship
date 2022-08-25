import logo from '/favicon.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='logo' />
      <h2 className='header-title'>Battleship</h2>
    </header>
  );
};

export default Header;
