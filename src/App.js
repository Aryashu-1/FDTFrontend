// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserHome from './components/userhome/userhome';
import AdminHome from './components/adminhome/adminhome';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserHome />} />
          <Route path="/admin" element={<AdminHome />} />
          {/* Add routes for userhome and adminhome */}
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
        </Routes>
      </Router>
  );
}

export default App;
