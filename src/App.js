import React from 'react';
import './App.css';
import NavBar from './components/Pages/NavBar';
import AddJob from './components/Pages/AddJob/AddJob';
import EditJob from './components/Pages/EditeJob/EditJob';
import Jobs from './components/Pages/Jobs/Jobs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowIntern from './components/Pages/ShowIntern/ShowIntern';
import ShowFullTime from './components/Pages/ShowFullTime/ShowFullTime';
import ShowRemote from './components/Pages/ShowRemote/ShowRemote';
function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/blogs" element={<Jobs />} />
        <Route path="/addJob" element={<AddJob />} />
        <Route path="/internJobs" element={<ShowIntern />} />
        <Route path="/fulltimeJobs" element={<ShowFullTime />} />
        <Route path="/remoteJobs" element={<ShowRemote />} />
        <Route path="/editJob" element={<EditJob />} />

      </Routes>
    </Router>


  );
}

export default App;
