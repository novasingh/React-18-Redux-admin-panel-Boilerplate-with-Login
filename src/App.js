import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { resetSnack, showSnack } from "./redux/actions/alertActions";
import { BrowserRouter} from "react-router-dom";
import { toast } from "react-toastify";
import RouteConfig from "./routeConfig";

function App({ showSnack, hideSnack ,isAuthenticated }) {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const [offlineSnackId, setOfflineSnackId] = useState(new Date().valueOf());

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);
    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  });

  const checkNetwork = useCallback(() => {
    if (!isOnline) {
      const key = new Date().valueOf();
      setOfflineSnackId(key);
      showSnack({
        message: "No connection!",
        options: {
          persist: true,
          variant: "error",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
          key: key,
        },
      });
    }
    if (isOnline) {
      toast.dismiss(offlineSnackId);
      hideSnack();
    }
  }, [hideSnack, isOnline, offlineSnackId, showSnack]);

  useEffect(() => {
    checkNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);


  return (
    <BrowserRouter>
      <RouteConfig isAuthenticated={isAuthenticated} />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loggedInUser: state.auth.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  hideSnack: () => dispatch(resetSnack()),
  showSnack: (payload) => dispatch(showSnack(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
