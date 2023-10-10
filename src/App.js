import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patients from './pages/Patient';
import Privacy from './pages/privacy';
import Freq from './pages/Freq';
import Terms from './pages/Terms';
import Footer from './pages/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Record from './pages/Record';
import Appointment from './pages/Appointment';

function App() {
  return (
    <div>
      <Router>
          <Routes>
           
            <Route path="/Landing" element={<Footer />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Doctors" element={<Doctors />} />
            <Route path="/Patient" element={<Patients />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/Freq" element={<Freq />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/record" element={<Record />} />

          </Routes>
        <div className="container">
          <Routes>
            <Route path="/list" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
