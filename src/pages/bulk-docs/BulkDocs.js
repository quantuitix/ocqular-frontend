import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import UploadFile from "../../components/upload-file/UploadFile";

const BulkDocs = () => {
  return (
    <>
      <Header />
      <div className="pt-5 container hei-100">
        <h5 className="my-5">Upload Folder</h5>

        <div className="d-flex align-items-center row">
          <UploadFile placeholder="Upload Input Folder" />
          <button className="col-4 col-md-3 btn btn-primary">
            Read Documents
          </button>
        </div>

        <div className="d-flex justify-content-end mt-5">
          <button className="m-0 border btn btn-success shadow-none rounded p-2">
            Download Output
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BulkDocs;
