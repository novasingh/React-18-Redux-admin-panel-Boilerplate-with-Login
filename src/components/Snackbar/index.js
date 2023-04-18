import {useEffect, useCallback} from "react";
import {connect} from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Snackbar = ({show, message, options}) => {
  const handleSnackbar = useCallback(() => {
    if (show) {
      toast(message, options);
    }
  }, [show, message, options]);

  useEffect(() => {
    handleSnackbar();
  }, [handleSnackbar]);

  return <ToastContainer />;
};

const mapStateToProps = state => ({
  show: state.alert.show,
  message: state.alert.message,
  options: state.alert.options
});

export default connect(mapStateToProps)(Snackbar);