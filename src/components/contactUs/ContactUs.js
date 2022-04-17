const ContactUs = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contactUs" className="border-bottom py-5 d-flex flex-column">
      <h4 className="my-4">Contact Us</h4>
      <div className="d-flex w-100 mb-5 flex-wrap">
        <form
          onSubmit={handleFormSubmit}
          className="col-11 col-md-5 mx-auto mx-md-0"
        >
          <div class="mb-3">
            <input
              type="text"
              class="form-control shadow-none"
              name="name"
              placeholder="Name*"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Company Name*"
              name="companyName"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control shadow-none"
              placeholder="Email*"
              name="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control shadow-none"
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
  );
};

export default ContactUs;