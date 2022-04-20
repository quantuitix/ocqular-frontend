import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import UploadFile from "../../components/upload-file/UploadFile";
import { useHistory } from "react-router-dom";

const BulkInvoiceDocs = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="pt-5 container hei-100">
        <h5 className="my-5">Upload Folder</h5>

        <div className="d-flex align-items-center row">
          <UploadFile placeholder="Upload Input Folder" />
        </div>
        <div className="d-flex align-items-center row mt-4">
          <UploadFile placeholder="Upload Output Format (Excel / CSV)" />
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button
            onClick={() => history.push("/docs-mapping")}
            className="m-0 border btn btn-success shadow-none rounded p-2"
          >
            Preview All
          </button>

          <button
            onClick={() => history.push("/docs-mapping")}
            className="m-0 border btn btn-success shadow-none rounded p-2"
          >
            Preview New
          </button>

          <button className="m-0 border btn btn-success shadow-none rounded p-2">
            Preview None
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BulkInvoiceDocs;
