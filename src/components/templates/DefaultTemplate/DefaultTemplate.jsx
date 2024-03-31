import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from "../../atoms/Header";
import Footer from "../../atoms/Footer/Footer";

const DefaultTemplate = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box p="4">{children}</Box>
      <Footer />
    </Box>
  );
};

export default DefaultTemplate;