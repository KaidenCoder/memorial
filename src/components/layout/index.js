import React from 'react';
import Footer from '../footer';
import NavbarComponent from '../navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
