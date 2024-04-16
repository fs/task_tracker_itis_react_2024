import React, { useEffect, useContext } from "react";

import { toast, ToastContainer } from "react-toastify";

import NotifierContext from "../../../context/NotifierContext";

const Notifier = () => {
  const { message, clearMessage, errorMessage, clearErrorMessage} = useContext(NotifierContext);
  useEffect(() => {
    if (message) {
      toast.success(message);
      clearMessage();
    }
    if (errorMessage) {
      toast.error(errorMessage);
      clearErrorMessage();
    }
  }, [message, errorMessage, clearMessage, clearErrorMessage]);
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      closeOnClick
      hideProgressBar
    />
  )
};

export default Notifier;
