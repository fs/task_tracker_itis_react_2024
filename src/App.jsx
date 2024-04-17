import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { ApolloProvider } from '@apollo/client/react';

import NotifierContext from "./context/NotifierContext";
import client from './lib/apolloClient';
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)

  const context = useMemo(
    () => ({
      message,
      setMessage: (text) => setMessage(text),
      clearMessage: () => setMessage(""),
      errorMessage,
      setErrorMessage: (text) => setErrorMessage(text),
    }),
    [message, errorMessage],
  );

  return (
    <NotifierContext.Provider value={context}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </NotifierContext.Provider>
  );
};

export default App;
