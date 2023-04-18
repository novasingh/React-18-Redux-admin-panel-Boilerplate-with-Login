import React from "react";
import Page from "../../components/Page";
import { Route, Routes} from "react-router-dom";
import DashboardView from "../../partials/Dashboard/DashboardView";

const Dashboard = () => {
  return (
    <Page id="page--dashboard" title="Dashboard">
      <Routes>
        <Route path="/" element={<DashboardView />} />
      </Routes>
    </Page>
  );
};

export default Dashboard;
