// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Homepage/Header';
import Features from './components/Homepage/Features';
import Footer from './components/Homepage/Footer';
import Top_Navbar from './components/Homepage/Top_Navbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import Chat from './components/Chat/Chat';
import About from "./components/Homepage/About";
import Contact from "./components/Homepage/Contact";
import UserProfile from "./components/Profile/UserProfile";
import Journal from "./components/Journal/Journal";
import SelfCare from "./components/SelfCare/SelfCare";

function App() {
  return (
    <Router>
      <div className='App'>
        <ConditionalNavbars />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth/signup' element={<SignUp />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/profile' element={<UserProfile />} />
          <Route path='/user/journal' element={<Journal />} />
          <Route path='/user/study' element={<SelfCare />} />
        </Routes>
        <ConditionalFooter />
      </div>
    </Router>
  );
}

function ConditionalNavbars() {
  const location = useLocation();
  const topNavbarPaths = ['/', '/auth/login', '/auth/signup', '/contact', '/about']; // Add paths for Top_Navbar
  const navbarPaths = ['/chat','/user/profile','/user/study','/user/journal','/user/home']; // Add paths for Navbar

  if (topNavbarPaths.includes(location.pathname)) {
    return <Top_Navbar />;
  } else if (navbarPaths.includes(location.pathname)) {
    return <Navbar />;
  }
  
  return null;
}

function ConditionalFooter() {
  const location = useLocation();
  const footerPaths = ['/', '/auth/signup', '/contact', '/about'];
  const noFooterPaths = ['/chat'];

  if (footerPaths.includes(location.pathname)) {
    return <Footer />;
  } else if (noFooterPaths.includes(location.pathname)) {
    return null;
  }
  
  return null;
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
