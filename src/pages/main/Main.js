import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import GridOnIcon from "@mui/icons-material/GridOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BadgeIcon from "@mui/icons-material/Badge";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { UserContext } from "../../contexts/UserContext";
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
  const history = useHistory();
  const { user } = useContext(UserContext);

  const handleSingleDocClick = () => {
    if (selectedDocType === null) return;

    history.push(selectedDocType === 4 ? "/single-invoice-doc" : "/single-doc");
  };
  const handleBulkDocClick = () => {
    if (selectedDocType === null) return;

    history.push(
      user
        ? selectedDocType === 4
          ? "/bulk-invoice-docs"
          : "/bulk-docs"
        : "/login"
    );
  };

  return (
    <>
      <Header />
      <div className="py-4" />

      <div className="container hei-100 my-5">
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
          <button
            className="btn btn-primary me-2"
            onClick={handleSingleDocClick}
          >
            Single Document
          </button>
          <button className="btn btn-primary ms-2" onClick={handleBulkDocClick}>
            Bulk Documents
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
