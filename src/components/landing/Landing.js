const Landing = () => {
  return (
    <header
      className="border-bottom container d-flex flex-column flex-md-row py-2"
      style={{
        height: 500,
      }}
    >
      <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-around p-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scr
          ext of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrext of the printing aer since the
          1500s, when an unknown printer took a galley of type and scr
        </p>
        <button className="ms-auto mx-auto">Login / Register</button>
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center">
        <img
          src="https://images.pexels.com/photos/9133505/pexels-photo-9133505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="w-100"
        />
      </div>
    </header>
  );
};

export default Landing;
