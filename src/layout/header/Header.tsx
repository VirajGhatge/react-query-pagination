import'./Header.css'

type HeaderProp = {
  title: string;
  subTitle: string;
};

function Header({ title, subTitle }: HeaderProp) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subTitle}</p>
      </div>
    </header>
  );
}

export default Header;
