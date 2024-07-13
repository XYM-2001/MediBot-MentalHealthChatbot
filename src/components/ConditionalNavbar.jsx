import React from "react";
import { useLocation } from "react-router-dom";
import Top_Navbar from './components/Homepage/Top_Navbar';
import Navbar from './components/Navbar';

function ConditionalNavbar() {
  const location = useLocation();
  const topNavbarPaths = ['/', '/auth/signup', '/contact', '/about']; // Add paths where you want to show Top_Navbar

  if (topNavbarPaths.includes(location.pathname)) {
    return <Top_Navbar />;
  }

  return <Navbar />;
}

export default ConditionalNavbar;
