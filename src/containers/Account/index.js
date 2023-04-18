import React from "react";
import Page from "../../components/Page";
import { Route, Routes} from "react-router-dom";
import ViewAccount from "../../partials/Account/ViewAccount";

const Account = () => {
  return (
    <Page id="page--account" title="Account">
      <Routes>
        <Route path="/" element={<ViewAccount />} />
      </Routes>
    </Page>
  );
};

export default Account;
