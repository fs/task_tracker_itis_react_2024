import { useState, useEffect } from 'react';
import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import ScrollToTopButton from "../../molecules/ScrollToTopButton";

const DefaultTemplate = ({ children }) => {

  return (

    <div className="defaultTemplate">
      <ScrollToTopButton />
      <Header />
      {children}
      <Footer />

    </div>
  );
};

export default DefaultTemplate;
