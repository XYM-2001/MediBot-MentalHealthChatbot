import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement for Switch

// Import your components
import Navbar from './components/Navbar';
import Header from './components/Homepage/Header';
import Features from './components/Homepage/Features';
import Testimonials from './components/Homepage/Testimonials';
import Footer from './components/Homepage/Footer';
import TopNavbar from './components/Homepage/Top_Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <TopNavbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <main>
      <Header />
      <Features />
      <Testimonials />
    </main>
  );
}

function AboutPage() {
  return <h2>About Page Content</h2>; // Replace with your About component
}

function ContactPage() {
  return <h2>Contact Page Content</h2>; // Replace with your Contact component
}

export default App;
