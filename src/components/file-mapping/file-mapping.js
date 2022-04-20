import MappingInpCols from "../mapping-inp-cols/MappingInpCols";

const FileMapping = ({ bulkFileMapping }) => {
  return (
    <div>
      <div className="d-flex py-5">
        <h3 className="col-2">Party name</h3>
        <div className="col-3">
          <input className="form-control shadow-none my-2d" />
        </div>
      </div>
      <div className="d-flex">
        <div className="col-3 px-3">
          <h4>Output format columns</h4>
          <MappingInpCols numOfInps={5} editable />
        </div>
        <div className="col-3 px-3">
          <h4>
            Document <br /> Headers
          </h4>
          <MappingInpCols numOfInps={5} editable dnd />
        </div>
        <div className="col-3 px-3">
          <h4>
            Document <br />
            Text
          </h4>
          <MappingInpCols numOfInps={5} dnd />
        </div>

        <div className="col-3 px-3">
          <div className="border d-flex align-items-center justify-content-center h-100 w-100">
            Document Preview
          </div>
          {bulkFileMapping && (
            <div className="d-flex justify-content-between">
              <p className="m-0">Prev</p>
              <p className="m-0">1 of 100</p>
              <p className="m-0">Prev</p>
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="d-flex my-5 col-9 d-flex align-items-center flex-column">
          <div>
            <button className="btn btn-primary px-5 me-5">Save Mappings</button>
            <button className="btn btn-primary px-5">Done</button>
          </div>
          <button className="btn btn-secondary px-5 my-5">
            Download Output
          </button>
        </div>

        <div className="d-flex my-5 col-3 d-flex align-items-start justify-content-end">
          <button className="btn btn-primary px-5">Restart</button>
        </div>
      </div>
    </div>
  );
};

export default FileMapping;
