import { Link } from "react-router-dom";

const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hei-100 pb-5">
      <div className="py-5 d-flex flex-column align-items-center">
        <h4 className="my-4">Login</h4>
        <form
          onSubmit={handleFormSubmit}
          className="col-11 col-md-3 mx-auto mx-md-0"
        >
          <div class="mb-3">
            <input
              type="email"
              required
              class="form-control shadow-none"
              placeholder="Email*"
              name="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              required
              class="form-control shadow-none"
              placeholder="Password*"
              name="password"
            />
          </div>
          <div className="d-flex my-4">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
          <Link to="/forgot-password" className="link">
            Forgot Password
          </Link>
          <div className="d-flex align-items-center mt-2">
            <p className="m-0">New User? </p>
            <Link to="/signup" className="ms-2 link">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
