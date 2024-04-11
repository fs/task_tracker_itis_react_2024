import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useMemo } from "react";
import NotifierContext from "./context/NotifierContext";

import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  const [message, setMessage] = useState("");

  const context = useMemo(
    () => ({
      message,
      setMessage: (text) => setMessage(text),
      clearMessage: () => setMessage(""),
    }),
    [message],
  );

  return (
    <NotifierContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </NotifierContext.Provider>
  );
};

export default App;
