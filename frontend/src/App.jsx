// import { useState } from 'react'
import "./globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLayout from "./components/clientView/common/Layout";
import Home from "./components/clientView/home/Home";
import Packages from "./components/clientView/packages/Packages";
import About from "./components/clientView/about/About";
import Blog from "./components/clientView/blog/Blog";
import Contact from "./components/clientView/contact/Contact";
// import Welcome from "./components/Welcome";
import Register from "./pages/clientView/Register";
import Login from "./pages/clientView/Login";
import ForgotPassword from "./pages/clientView/ForgotPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/client" element={<ClientLayout />}>
          
          <Route path="packages" element={<Packages />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
        </Route>
        
         
          
        
        {/* Fallback route for unmatched paths */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
