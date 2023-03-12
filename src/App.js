import React from 'react';
import './App.css';
import NavBar from './components/Pages/NavBar';
import AddJob from './components/Pages/AddJob/AddJob';
import EditJob from './components/Pages/EditeJob/EditJob';
import Jobs from './components/Pages/Jobs/Jobs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/blogs" element={<Jobs />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/editJob" element={<EditJob />} />

      </Routes>
    </Router>


  );
}

export default App;
