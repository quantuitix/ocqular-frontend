import HeightIcon from "@mui/icons-material/Height";

const MappingInpCols = ({ numOfInps, editable, dnd }) => {
  return (
    <div className="d-flex flex-column">
      {[1, 2, 3, 4].map((inp) => (
        <div className="d-flex align-items-center" key={inp}>
          <input
            className="form-control shadow-none my-2"
            readOnly={editable}
          />
          {dnd && (
            <div className="text-primary">
              <HeightIcon
                style={{
                  fontSize: 40,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MappingInpCols;
