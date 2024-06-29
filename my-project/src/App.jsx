import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Registrasi from './Report/MainComponent.jsx';
import Report from './ReportPage.jsx';
import Login from './Loginpages/Login1.jsx';
import User from './Report/User.jsx';
// import Em from './brand_sidebar.jsx';
import ReportPage from './ReportPage';
// import Report from './Report';
////////////////////////////////////
import Example from './Loginpages/split_screen.jsx'
import Registartion from './Loginpages/Registartion.jsx'
import Report1 from './Report/Report1.jsx'
import Chart1 from './Report/Chart1.jsx'
import Chart2 from './Report/Chart2.jsx'
import StatisticalDataReport from './Report/StatisticalDataReport.jsx';
import ViewComplaints from './ViewComplaints.jsx';
function App() {
  return (
  <ViewComplaints/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<Example />} />
    //     <Route path="/register" element={<Registartion />} />
    //     <Route path="/report" element={<ReportPage />} />
    //     <Route path="/user" element={<ReportPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App; // Change this to a default export
