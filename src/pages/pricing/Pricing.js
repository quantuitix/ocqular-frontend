import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="border-bottom container hei-100 py-5 d-flex flex-column">
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
      <Footer />
    </>
  );
};

export { Pricing };
