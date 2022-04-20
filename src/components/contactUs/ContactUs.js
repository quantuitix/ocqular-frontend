import Footer from "../footer/Footer";
import Header from "../header/Header";

const ContactUs = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="py-2" />
      <div className="py-5 d-flex hei-100 flex-column">
        <h4 className="my-4 text-center">Contact Us</h4>
        <div className="d-flex w-100 mb-5 justify-content-center flex-wrap">
          <form
            onSubmit={handleFormSubmit}
            className="col-11 col-md-4 mx-auto mx-md-0"
          >
            <div className="mb-4">
              <input
                required
                type="text"
                className="form-control shadow-none"
                name="name"
                placeholder="Name*"
              />
            </div>
            <div className="mb-4">
              <input
                required
                type="text"
                className="form-control shadow-none"
                placeholder="Company Name*"
                name="companyName"
              />
            </div>
            <div className="mb-4">
              <input
                required
                type="email"
                className="form-control shadow-none"
                placeholder="Email*"
                name="email"
              />
            </div>
            <div className="mb-4">
              <input
                required
                type="number"
                className="form-control shadow-none"
                placeholder="Phone Number*"
                name="phoneNumber"
              />
            </div>
            <div className="d-flex my-4">
              <button
                type="submit"
                className="col-11 col-md-4 btn btn-primary mx-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
