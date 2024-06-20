// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import RecentActivity from './pages/RecentActivity';
import Starred from './pages/Starred';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RepositoryDetails from './pages/RepositoryDetails';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/recent-activity" element={<RecentActivity />} />
          <Route path="/starred" element={<Starred />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/repository/:id" element={<RepositoryDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
