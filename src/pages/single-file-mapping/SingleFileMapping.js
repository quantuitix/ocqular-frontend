import FileMapping from "../../components/file-mapping/file-mapping";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const SingleFileMapping = () => {
  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="container">
        <FileMapping />
      </div>
      <Footer />
    </>
  );
};

export default SingleFileMapping;
