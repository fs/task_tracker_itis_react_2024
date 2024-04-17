import { createContext } from "react";

const NotifierContext = createContext({
    message: null,
    setMessage: () => {},
    clearMessage: () => {},
    errorMessage: null,
    setErrorMessage: () => {}
  });

export default NotifierContext;
