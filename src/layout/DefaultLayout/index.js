import React, { useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { logout } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const DefaultLayout = ({ children, user, handleLogout, isAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [isAuthenticated, location.pathname, navigate]);
  return (
    <div className="w-100 layout--default">
      <Header title="Dashboard" user={user} handleLogout={handleLogout} />
      <Sidebar />
      <Outlet />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
