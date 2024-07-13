import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

// Import your components
import Navbar from './components/Navbar';
import Header from './components/Homepage/Header';
import Features from './components/Homepage/Features';
// import Testimonials from './components/Homepage/Testimonials';
import Footer from './components/Homepage/Footer';
import Top_Navbar from './components/Homepage/Top_Navbar';
import SignUp from './components/SignUp/SignUp';
import Chat from './components/Chat/Chat'; // Ensure to import Chat component

function App() {
  return (
    <Router>
      <div className='App'>
        <ConditionalNavbars />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/chat' element={<Chat />} /> {/* Add this route */}
          {/* <Route path='/about' element={<AboutPage />} /> */}
          {/* <Route path='/contact' element={<ContactPage />} /> */}
          {/* Add more routes for other pages */}
        </Routes>
        <ConditionalFooter   />
      </div>
    </Router>
  );
}

function ConditionalNavbars() {
  const location = useLocation();
  const topNavbarPaths = ['/', '/auth/signup', '/contact', '/about']; // Add paths for Top_Navbar
  const navbarPaths = ['/chat']; // Add paths for Navbar

  if (topNavbarPaths.includes(location.pathname)) {
    return <Top_Navbar />;
  } else if (navbarPaths.includes(location.pathname)) {
    return <Navbar />;
  }
  
  return null; // Return null if no navbar should be displayed
}

function ConditionalFooter() {
  const location = useLocation();
  const footerPaths = ['/', '/auth/signup', '/contact', '/about']; // Add paths for Top_Navbar
  const noFooterPaths = ['/chat']; // Add paths for Navbar

  if (footerPaths.includes(location.pathname)) {
    return <Footer />;
  } else if (noFooterPaths.includes(location.pathname)) {
    return ;
  }
  
  return null; // Return null if no navbar should be displayed
}
function HomePage() {
  return (
    <main>
      <Header />
      <Features />
    </main>
  );
}

export default App;
