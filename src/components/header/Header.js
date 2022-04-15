const Header = () => {
  return (
    <header className="border-bottom py-2">
      <div className="container d-flex align-items-center">
        <div className="col-2 col-md-3">
          <h5 className="m-0 pointer">Logo</h5>
        </div>
        <div className="col col-md-6 d-flex align-items-center justify-content-around">
          <p className="m-0 pointer">Features</p>
          <p className="m-0 pointer">Pricing</p>
          <p className="m-0 pointer">FAQs</p>
          <p className="m-0 pointer">Contact Us</p>
        </div>
        <div className="col-3 d-flex">
          <button className="ms-auto">Login / Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
