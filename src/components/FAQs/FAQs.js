import Footer from "../footer/Footer";
import Header from "../header/Header";

const FAQs = () => {
  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="container hei-100 py-5 d-flex flex-column">
        <h4 className="my-4">FAQs</h4>
        <div className="d-flex flex-column w-100 mb-5 flex-wrap">
          <div className="border-bottom">
            <h6>Heading</h6>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
          </div>
          <div className="border-bottom">
            <h6>Heading</h6>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
          </div>
          <div className="border-bottom">
            <h6>Heading</h6>
            <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
