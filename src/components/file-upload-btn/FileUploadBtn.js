import "./file-upload-btn.css";

const FileUploadBtn = ({ label, placeholder }) => {
  return (
    <div className="d-flex align-items-center">
      <p className="col-6 col-md-8 m-0 border rounded p-2 me-3">
        {placeholder}
      </p>

      <div className="d-flex col-6 col-md-4 pe-4">
        <input
          type="file"
          id="upload"
          className="custom-file-upload-btn"
          hidden
        />

        <label
          for="upload"
          className="m-0 custom-file-upload-btn-label btn btn-primary w-100"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FileUploadBtn;
