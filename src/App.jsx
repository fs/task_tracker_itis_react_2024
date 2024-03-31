import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import InfoPage from './pages/InfoPage';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
