import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { fetchPost } from "../../utils/fetchPost";
const Signup = () => {
  const { updateValues } = useContext(UserContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    updateValues("loading", true);
    var formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    fetchPost("http://localhost:5000/signup", "post", {
      email,
      password,
      name,
    })
      .then((res) => {
        console.log(res);
        updateValues("user", res?.data);
      })
      .catch(() => {})
      .finally(() => {
        updateValues("loading", false);
      });
  };
  return (
    <div className="hei-100 pb-5">
      <div className="py-5 d-flex flex-column align-items-center">
        <h4 className="my-4">Create a account</h4>
        <form
          onSubmit={handleFormSubmit}
          className="col-11 col-md-3 mx-auto mx-md-0"
        >
          <div className="mb-3">
            <input
              type="email"
              required
              className="form-control shadow-none"
              placeholder="Email*"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              className="form-control shadow-none"
              placeholder="Name*"
              name="name"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              className="form-control shadow-none"
              placeholder="Password*"
              name="password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              required
              className="form-control shadow-none"
              placeholder="Confirm Password*"
              name="confirmPassword"
            />
          </div>
          <div className="d-flex my-4">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>

          <div className="d-flex align-items-center">
            <p className="m-0">Have an account? </p>
            <Link to="/login" className="ms-2 link">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
