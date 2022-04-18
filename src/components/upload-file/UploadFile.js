import FileUploadBtn from "../file-upload-btn/FileUploadBtn";

const UploadFile = ({ placeholder }) => {
  return (
    <div className="col-8 col-md-9">
      <FileUploadBtn label="Browse" placeholder={placeholder} />
    </div>
  );
};

export default UploadFile;
