import { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
const Header = () => {
  const history = useHistory();
  const { user, updateValues } = useContext(UserContext);
  const navigate = (path) => {
    history.push(path);
  };
  return (
    <header className="border-bottom py-2 position-fixed w-100 bg-white">
      <div className="container d-flex align-items-center">
        <div className="col-2 col-md-3">
          <h5 onClick={() => navigate("/")} className="m-0 pointer">
            Logo
          </h5>
        </div>
        <div className="col col-md-6 d-flex align-items-center justify-content-around">
          <Link to="/features" className="m-0 pointer link">
            Features
          </Link>
          <Link to="/pricing" className="m-0 pointer link">
            Pricing
          </Link>
          <Link to="/FAQs" className="m-0 pointer link">
            FAQs
          </Link>
          <Link to="/contact-us" className="m-0 pointer link">
            Contact Us
          </Link>
        </div>
        <div className="col-3 d-flex">
          {!user ? (
            <Link to="/login" className="ms-auto link btn btn-primary">
              Login / Register
            </Link>
          ) : (
            <button
              className="ms-auto btn btn-primary"
              onClick={() => {
                updateValues("user", null);
                history.push("/");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
