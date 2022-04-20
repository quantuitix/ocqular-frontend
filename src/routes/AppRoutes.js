import { Route, Switch } from "react-router-dom";
import BulkDocs from "../pages/bulk-docs/BulkDocs";
import BulkInvoiceDocs from "../pages/bulk-invoice-docs/BulkInvoiceDocs";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import SingleDoc from "../pages/single-doc/SingleDoc";
import SingleInvoiceDoc from "../pages/single-invoice-doc/SingleInvoiceDoc";
import ContactUs from "../components/contactUs/ContactUs";
import FAQs from "../components/FAQs/FAQs";
import Main from "../pages/main/Main";
import { Features } from "../pages/features/Features";
import { Pricing } from "../pages/pricing/Pricing";
import SingleFileMapping from "../pages/single-file-mapping/SingleFileMapping";
import BulkFilesMapping from "../pages/bulk-files-mapping/BulkFilesMapping";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />

      <Route exact path="/signup" component={Signup} />
      <Route exact path="/pricing" component={Pricing} />

      <Route exact path="/features" component={Features} />
      <Route exact path="/doc-mapping" component={SingleFileMapping} />
      <Route exact path="/docs-mapping" component={BulkFilesMapping} />

      <Route exact path="/single-doc" component={SingleDoc} />
      <Route exact path="/bulk-docs" component={BulkDocs} />
      <Route exact path="/single-invoice-doc" component={SingleInvoiceDoc} />
      <Route exact path="/bulk-invoice-docs" component={BulkInvoiceDocs} />
      <Route exact path="/contact-us" component={ContactUs} />

      <Route exact path="/FAQs" component={FAQs} />
    </Switch>
  );
};

export default AppRoutes;
