import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BadgeIcon from "@mui/icons-material/Badge";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useState } from "react";

const OPTIONS = [
  {
    icon: <TextSnippetIcon style={{ width: "100%", height: 100 }} />,
    name: "Plain Text",
  },
  {
    icon: <GridOnIcon style={{ width: "100%", height: 100 }} />,
    name: "Table",
  },
  {
    icon: <FormatListBulletedIcon style={{ width: "100%", height: 100 }} />,
    name: "Form",
  },
  {
    icon: <BadgeIcon style={{ width: "100%", height: 100 }} />,
    name: "ID",
  },
  {
    icon: <ReceiptIcon style={{ width: "100%", height: 100 }} />,
    name: "Invoice",
  },
];

const Main = () => {
  const [selectedDocType, setSelectedDocType] = useState(null);

  return (
    <div>
      <h5 className="my-4">Select Document Type</h5>
      <div className="d-flex justify-content-around row">
        {OPTIONS?.map((opt, idx) => (
          <div
            key={opt.name}
            onClick={() => setSelectedDocType(idx)}
            className={`pointer border col-2 d-flex animate align-items-center justify-content-around py-2 flex-column rounded${
              selectedDocType === idx ? " border-primary" : ""
            }`}
          >
            {opt.icon} <p className="text-center">{opt.name}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-5">
        <button className="btn btn-primary me-2">Single Document</button>
        <button className="btn btn-primary ms-2">Bulk Documents</button>
      </div>
    </div>
  );
};

export default Main;
