import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DeafaultTemplate from "src/components/templates/DefaultTemplate/DefaultTemplate";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import InfoPage from "./pages/InfoPage";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<DeafaultTemplate><HomePage /></DeafaultTemplate>} />
          <Route path="/projects" element={<DeafaultTemplate><ProjectsPage /></DeafaultTemplate>} />
          <Route path="/info" element={<DeafaultTemplate><InfoPage /></DeafaultTemplate>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
