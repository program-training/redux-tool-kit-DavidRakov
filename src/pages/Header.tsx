type HeaderProps = {
  animal: string;
};

const Header = ({ animal }: HeaderProps) => {
  return (
    <div id="header">
      <span>החיה שנבחרה:</span>
      <span>{animal}</span>
    </div>
  );
};

export default Header;
