import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Contact from './pages/contact/Contact';
import Landing from './pages/landing/Landing';
import NavBar from './components/navbar/NavBar';
import Project from './pages/project/Project';
import About from './pages/about/About';

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Landing />} />
    </Routes>
    <br />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
