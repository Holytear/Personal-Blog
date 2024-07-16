import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import SinglePost from './pages/SinglePost';
import Footer from './components/Footer'; // Footer bileşenini import etmeyi unutmayın
import './App.css'; // CSS dosyasını import etmeyi unutmayın

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
      <Footer /> {/* Footer bileşenini ekleyin */}
    </div>
  );
}

export default App;
