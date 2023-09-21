import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
