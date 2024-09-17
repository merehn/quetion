// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CarouselComponent from './components/CarouselComponent/CarouselComponent';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import './App.css'; // Custom styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        
        {/* Routes for the different pages */}
        <Routes>
          {/* Carousel Component for the home page */}
          <Route path="/" element={
            <div className="carousel-container">
              <CarouselComponent />
            </div>
          } />
          
          {/* Questions Page for the /questions route */}
          <Route path="/questions" element={<QuestionsPage />} />
        </Routes>

        {/* Footer component displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
