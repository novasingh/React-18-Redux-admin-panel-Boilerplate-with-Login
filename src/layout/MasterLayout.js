import React from "react";
import { connect } from "react-redux";

import DefaultLayout from "./DefaultLayout";
import BlankLayout from "./BlankLayout";
import { Navigate, Outlet } from "react-router-dom";

function MasterLayout({ isAuthenticated }) {
  const Layout = isAuthenticated ? DefaultLayout : BlankLayout;
  return isAuthenticated && isAuthenticated !== null ? (
    <Layout>
      {" "}
      <Outlet />{" "}
    </Layout>
  ) : (
    <BlankLayout>
      <Navigate to="/login" />
    </BlankLayout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MasterLayout);
