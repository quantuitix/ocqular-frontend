import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Features = () => {
  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="border-bottom container hei-100 py-5 d-flex flex-column">
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
      <Footer />
    </>
  );
};

export { Features };
