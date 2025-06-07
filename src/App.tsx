import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Animation from './pages/Animation';
import Art from './pages/Art';
import Series from './pages/Series';
import Lessons from './pages/Lessons';
import Cartoons from './pages/Cartoons';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/art" element={<Art />} />
          <Route path="/series" element={<Series />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/cartoons" element={<Cartoons />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;