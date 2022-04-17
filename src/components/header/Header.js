const Header = () => {
  return (
    <header className="border-bottom py-2 position-fixed w-100 bg-white">
      <div className="container d-flex align-items-center">
        <div className="col-2 col-md-3">
          <h5 className="m-0 pointer">Logo</h5>
        </div>
        <div className="col col-md-6 d-flex align-items-center justify-content-around">
          <a href="#features" className="m-0 pointer link">
            Features
          </a>
          <a href="#pricing" className="m-0 pointer link">
            Pricing
          </a>
          <a href="#FAQs" className="m-0 pointer link">
            FAQs
          </a>
          <a href="#contactUs" className="m-0 pointer link">
            Contact Us
          </a>
        </div>
        <div className="col-3 d-flex">
          <button className="ms-auto">Login / Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
