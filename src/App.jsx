import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useMemo} from "react";
import DeafaultTemplate from "src/components/templates/DefaultTemplate/DefaultTemplate";
import NotifierContext from "./context/NotifierContext";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import InfoPage from "./pages/InfoPage";
import ProjectDetailsPage from "./components/organisms/ProjectsDetails/ProjectDetailsPage";
import './App.css'

const App = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const context = useMemo(
    () => ({
      message,
      setMessage: (text) => setMessage(text),
      clearMessage: () => setMessage(""),
      messageType,
      setMessageType: (text) => setMessageType(text),
      clearMessageType: () => setMessageType(""),
    }),
    [message, messageType]
  );


  return (
    <NotifierContext.Provider value={context}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<DeafaultTemplate><HomePage /></DeafaultTemplate>} />
            <Route path="/projects" element={<DeafaultTemplate><ProjectsPage /></DeafaultTemplate>} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
            <Route path="/info" element={<DeafaultTemplate><InfoPage /></DeafaultTemplate>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotifierContext.Provider>

  );
};
export default App;
