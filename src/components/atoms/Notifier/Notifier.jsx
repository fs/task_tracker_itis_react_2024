import React, { useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import NotifierContext from "../../../context/NotifierContext";

const Notifier = () => {
  const { message, clearMessage, messageType, clearMessageType } = useContext(NotifierContext);

  useEffect(() => {
    if (message) {
      if (messageType==="success") {
        toast.success(message);
      }
      else if (messageType==="error") {
        toast.error(message);
      }
    }
    clearMessage();
    clearMessageType();
  }, [message, messageType])

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
