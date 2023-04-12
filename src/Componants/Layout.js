import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';


const Layout = ({ children }) => {
  return (
    <>
    <Header/>
     <div>{children}</div> 
     <Footer/>
    </>
  )
}

export default Layout
