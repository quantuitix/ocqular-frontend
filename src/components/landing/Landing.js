import Main from "../../pages/main/Main";
import ContactUs from "../contactUs/ContactUs";
import FAQs from "../FAQs/FAQs";

const Landing = () => {
  return (
    <div className="container pt-5">
      <div className="border-bottom d-flex flex-column flex-md-row py-2 py-5">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-around p-5">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scr ext of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrext of the
            printing aer since the 1500s, when an unknown printer took a galley
            of type and scr
          </p>
          <button className="ms-auto mx-auto">Login / Register</button>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <img
            alt="river"
            src="https://images.pexels.com/photos/9133505/pexels-photo-9133505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="w-100"
          />
        </div>
      </div>

      <div id="features" className="border-bottom py-5 d-flex flex-column">
        <h4>Features</h4>
        <div
          className="d-flex flex-wrap w-100 mb-5"
          style={{
            height: 200,
          }}
        >
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100" />
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100" />
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100" />
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100" />
          </div>
        </div>
      </div>

      <div id="pricing" className="border-bottom py-5 d-flex flex-column">
        <h4>Pricing</h4>
        <div
          className="d-flex w-100 mb-5 flex-wrap"
          style={{
            height: 350,
          }}
        >
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100 d-flex justify-content-between align-items-center flex-column py-4">
              <h6>Trial</h6>
              <button>Get Started</button>
            </div>
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100 d-flex justify-content-between align-items-center flex-column py-4">
              <h6>Starter</h6>
              <button>Select</button>
            </div>
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100 d-flex justify-content-between align-items-center flex-column py-4">
              <h6>Premium</h6>
              <button>Select</button>
            </div>
          </div>
          <div className="col-6 col-md-3 p-3">
            <div className="border w-100 h-100 d-flex justify-content-between align-items-center flex-column py-4">
              <h6>Enterprise</h6>
              <button>Select</button>
            </div>
          </div>
        </div>
      </div>
      <FAQs />

      <ContactUs />

      <Main />
    </div>
  );
};

export default Landing;
