import React, { useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import NotifierContext from "../../../context/NotifierContext";

const Notifier = () => {
  const { message, clearMessage, messageType, clearMessageType } = useContext(NotifierContext);

  useEffect(() => {
    if (message && messageType === "success") {
      toast.success(message);
    }
    if (message && messageType === "error"){
      toast.error(message)
    }
    clearMessageType();
    clearMessage();
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
