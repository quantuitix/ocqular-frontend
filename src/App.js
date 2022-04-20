import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/loader/loader";
import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { useHistory } from "react-router-dom";
function App() {
  const { loading, user } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="hei-100">
      {loading && <Loader />}
      <AppRoutes />
    </div>
  );
}

export default App;
