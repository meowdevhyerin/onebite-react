import './Header.css';

const Header = ({ titie, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{titie}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
