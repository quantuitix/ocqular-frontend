import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default AppRoutes;
