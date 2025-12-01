import { PiFarmBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header className="header  header-img d-flex flex-column justify-content-center align-items-center text-white">
          <h2 className="lg-font-title">Regeneration Acres</h2>
          {/* <PiFarmBold className="text-6xl mb-4" />
      <div className="flex flex-row space-x-4 lg-font-title">
        <h2>Est.</h2>
        <h2>2022</h2>
      </div> */}
        </header>
      </div>
    </div>
  );
};

export default Header;
