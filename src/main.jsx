import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';

// views
import HomePage from './views/HomePage.jsx';

// layouts
import Auth from './layouts/Auth.jsx';
import Admin from './layouts/Admin.jsx';

// Create a root for rendering
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Route for layouts */}
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/admin/*' element={<Admin />} />

      {/* Route for without layouts */}
      <Route path="/welcome" element={<HomePage />} />

      {/* Redirect to the home page */}
      <Route path="/" element={<Navigate to="/auth/login" />} />
    </Routes>
  </BrowserRouter>
);
