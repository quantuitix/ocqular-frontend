import { Route, Switch } from "react-router-dom";
import BulkDocs from "../pages/bulk-docs/BulkDocs";
import BulkInvoiceDocs from "../pages/bulk-invoice-docs/BulkInvoiceDocs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import SingleDoc from "../pages/single-doc/SingleDoc";
import SingleInvoiceDoc from "../pages/single-invoice-doc/SingleInvoiceDoc";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/single-doc" component={SingleDoc} />
      <Route exact path="/bulk-docs" component={BulkDocs} />
      <Route exact path="/single-invoice-doc" component={SingleInvoiceDoc} />
      <Route exact path="/bulk-invoice-docs" component={BulkInvoiceDocs} />
    </Switch>
  );
};

export default AppRoutes;
