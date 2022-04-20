import FileMapping from "../../components/file-mapping/file-mapping";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const BulkFilesMapping = () => {
  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="container py-4">
        <p>100 documents to be previewed</p>
        <FileMapping bulkFileMapping />
      </div>

      <Footer />
    </>
  );
};

export default BulkFilesMapping;
