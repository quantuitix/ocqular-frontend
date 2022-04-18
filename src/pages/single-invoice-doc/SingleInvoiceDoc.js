import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import UploadFile from "../../components/upload-file/UploadFile";

const SingleInvoiceDoc = () => {
  return (
    <>
      <Header />
      <div className="pt-5 container hei-100">
        <h5 className="my-5">Upload File</h5>

        <div className="d-flex align-items-center row">
          <UploadFile placeholder="Upload Input File" />
        </div>
        <div className="d-flex align-items-center row mt-4">
          <UploadFile placeholder="Upload Output Format (Excel / CSV)" />
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button className="m-0 border btn btn-success shadow-none rounded p-2">
            Preview Documents
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleInvoiceDoc;
